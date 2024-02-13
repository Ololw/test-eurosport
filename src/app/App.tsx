import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../shared/hooks';
import { fetchMatches } from '../shared/reducers/matches.slice';
import { fetchPlayers } from '../shared/reducers/players.slice';
import { IPlayer } from '../shared/utils/types';
import LoaderComponent from './components/loader/loader.component';
import MatchesWonListComponent from './components/matches-won-list/matches-won-list.component';
import PlayerCardComponent from './components/player-card/player-card.component';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
    dispatch(fetchMatches());
  }, [dispatch]);

  //Players
  const isLoadingPlayers = useAppSelector((state) => state.players.isLoading);
  const hasErrorPlayers = useAppSelector((state) => state.players.hasError);
  const players = useAppSelector((state) => state.players.players);

  //Matches
  const isLoadingMatches = useAppSelector((state) => state.matches.isLoading);
  const hasErrorMatches = useAppSelector((state) => state.matches.hasError);

  //Player selected
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer | undefined>(undefined);

  if (isLoadingPlayers || isLoadingMatches) {
    return <LoaderComponent />;
  } else if (hasErrorPlayers || hasErrorMatches) {
    return <p>Error retrieving data from the api.</p>;
  } else {
    return (
      <div className="p-12">
        <div className="flex w-full" data-cy="player-cards">
          {players.map((player) => (
            <PlayerCardComponent key={player.id} player={player} onClick={() => setSelectedPlayer(player)} />
          ))}
        </div>

        {selectedPlayer && (
          <div className="mt-8">
            <MatchesWonListComponent player={selectedPlayer} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
