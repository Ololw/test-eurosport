import dayjs from 'dayjs';
import { useMemo } from 'react';

import { useAppSelector } from '../../../shared/hooks';
import { IMatch, IPlayer } from '../../../shared/utils/types';
import CardComponent from '../card/card.component';

type MatchCardProps = {
  match: IMatch;
};

function formatDate(time: string) {
  return dayjs(time).format('HH[h]mm');
}

function getTextColor(match: IMatch, player: IPlayer | undefined) {
  if (!player) {
    return '';
  }
  return match.winner.id === player.id ? 'text-green-win' : 'text-red-lose';
}

const MatchCardComponent: React.FC<MatchCardProps> = ({ match }: MatchCardProps) => {
  const players = useAppSelector((state) => state.players.players);

  const player1 = useMemo(() => players.find((player) => player.id === match.players[0].id), [players]);
  const player2 = useMemo(() => players.find((player) => player.id === match.players[1].id), [players]);
  const matchDate = useMemo(() => dayjs(match.startTime).format('DD/MM/YYYY'), [match]);

  return (
    <CardComponent className="min-w-1/4 flex flex-col items-center">
      <p>{matchDate}</p>
      <p data-cy="match-card--players">
        <span className={getTextColor(match, player1)}>{player1 ? player1.lastname : 'player1'} </span>
        <span>vs </span>
        <span className={getTextColor(match, player2)}>{player2 ? player2.lastname : 'player2'}</span>
      </p>
      <p>Started at {formatDate(match.startTime)}</p>
      <p>Ended at {formatDate(match.endTime)}</p>
    </CardComponent>
  );
};

export default MatchCardComponent;
