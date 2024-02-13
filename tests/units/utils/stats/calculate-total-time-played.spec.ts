import calculateTotalTimePlayed from '../../../../src/shared/utils/stats/calculate-total-time-played.util';
import { IMatch } from '../../../../src/shared/utils/types';

const matches: IMatch[] = [
  {
    id: '1',
    players: [{ id: 'p1' }, { id: 'p2' }],
    winner: { id: 'p1' },
    startTime: '2022-01-31T07:12:00.000Z',
    endTime: '2022-01-31T16:33:00.000Z',
  },
  {
    id: '2',
    players: [{ id: 'p1' }, { id: 'p2' }],
    winner: { id: 'p1' },
    startTime: '2022-01-31T07:12:00.000Z',
    endTime: '2022-01-31T16:33:00.000Z',
  },
];

describe('Calculate total time played spec', () => {
  it('An empty array should return 0', () => {
    expect(calculateTotalTimePlayed([])).toBe(0);
  });

  it('Should return the rounded number of hours played', () => {
    expect(calculateTotalTimePlayed(matches)).toBe(19);
  });

  it('Should return 0 if the end is before start', () => {
    const endBeforeStart: IMatch = {
      ...matches[0],
      endTime: '2022-01-31T07:12:00.000Z',
      startTime: '2022-01-31T16:33:00.000Z',
    };
    expect(calculateTotalTimePlayed([endBeforeStart])).toBe(0);
  });

  it('Undefined should return 0', () => {
    expect(calculateTotalTimePlayed(undefined as unknown as [])).toBe(0);
  });
});
