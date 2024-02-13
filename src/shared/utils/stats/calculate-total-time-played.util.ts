import dayjs from 'dayjs';

import { IMatch } from '../types';

/**
 *
 * @param matches
 * @returns Total time rounded in hours
 */
export default function calculateTotalTimePlayed(matches: IMatch[]): number {
  if (!matches) {
    return 0;
  }

  const totalTimeInMilliseconds = matches.reduce<number>((previous, match) => {
    const start = dayjs(match.startTime);
    const end = dayjs(match.endTime);

    if (!start.isValid() || !end.isValid()) {
      return 0;
    }

    if (end.isBefore(start)) {
      return 0;
    }

    return previous + end.diff(start);
  }, 0);

  const numberOfHours = totalTimeInMilliseconds / (1000 * 60 * 60);

  return Math.round(numberOfHours);
}
