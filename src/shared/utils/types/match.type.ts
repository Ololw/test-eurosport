import { IPlayer } from './player.type';

export interface IMatch {
    id: string;
    players: Pick<IPlayer, 'id'>[];
    winner: Pick<IPlayer, 'id'>;
    startTime: string;
    endTime: string;
}