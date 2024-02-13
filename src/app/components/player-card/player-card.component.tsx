import { useMemo } from 'react';

import { useAppSelector } from '../../../shared/hooks';
import calculateTotalTimePlayed from '../../../shared/utils/stats/calculate-total-time-played.util';
import formatHeightFromCmToMeter from '../../../shared/utils/stats/format-height.util';
import formatWeightFromGramsToKg from '../../../shared/utils/stats/format-weight.util';
import { IPlayer } from '../../../shared/utils/types';
import CardComponent from '../card/card.component';

type PlayerCardProps = {
  player: IPlayer;
  onClick: () => void;
};

const PlayerCardComponent: React.FC<PlayerCardProps> = ({ player, onClick }: PlayerCardProps) => {
  const playerMatches = useAppSelector((state) => {
    if (player && player.id) {
      return state.matches.matchesByPlayer[player.id];
    }
    return [];
  });

  const totalTimePlayed = useMemo(() => calculateTotalTimePlayed(playerMatches), [playerMatches]);

  return (
    <CardComponent className="flex mx-auto hover:shadow-lg cursor-pointer" onClick={onClick}>
      <img src={player.picture.url} />

      <div className="ml-8">
        <div className="flex items-center">
          <span>
            {player.firstname} {player.lastname}
          </span>
          <img className="w-5 h-4 ml-2" src={player.country.picture.url} />
        </div>

        <p data-testid="player-card--total-played-time">Total played time: {totalTimePlayed} hours</p>
        <p data-testid="player-card--height">Height: {formatHeightFromCmToMeter(player.stats.height)}</p>
        <p data-testid="player-card--weight">Weight: {formatWeightFromGramsToKg(player.stats.weight)}</p>
        <p data-testid="player-card--rank">Rank: {player.stats.rank}</p>
        <p data-testid="player-card--points">Points: {player.stats.points}</p>
      </div>
    </CardComponent>
  );
};

export default PlayerCardComponent;
