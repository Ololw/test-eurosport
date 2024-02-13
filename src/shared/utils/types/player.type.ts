import { ICountry } from './country.type';
import { IPicture } from './picture.type';

export enum PlayerSex {
    MAN,
    WOMAN
}

export interface IStats {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
}

export interface IPlayer {
    id: string;
    firstname: string;
    lastname: string;
    shortname: string;
    sex: PlayerSex;
    picture: IPicture;
    country: ICountry;
    stats: IStats;
}