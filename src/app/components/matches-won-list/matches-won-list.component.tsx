import dayjs from 'dayjs';
import { useMemo } from 'react';

import { useAppSelector } from '../../../shared/hooks';
import { IPlayer } from '../../../shared/utils/types';
import MatchCardComponent from '../match-card/match-card.component';

type MatchesWonListProps = {
  player: IPlayer;
};

const MatchesWonListComponent: React.FC<MatchesWonListProps> = ({ player }: MatchesWonListProps) => {
  const matchesWon = useAppSelector((state) => state.matches.matchesWonByPlayer[player.id]);

  const matchesWonSorted = useMemo(() => {
    return [...matchesWon].sort((matchA, matchB) => {
      return dayjs(matchA.startTime).isAfter(dayjs(matchB.startTime)) ? 1 : -1;
    });
  }, [matchesWon]);

  return (
    <>
      <p className="mx-auto w-fit">Matches won by {player.lastname}</p>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {matchesWonSorted.map((match) => (
          <MatchCardComponent key={match.id} match={match}></MatchCardComponent>
        ))}
      </div>
    </>
  );
};

export default MatchesWonListComponent;
