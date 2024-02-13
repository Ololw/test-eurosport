/**
 * @param heightInCm The height in cm to format
 * @returns A string describing the height in meters
 */
export default function formatHeightFromCmToMeter(heightInCm: number): string {
  if (isNaN(heightInCm)) {
    return 'No info';
  }

  const numberOfMeter = heightInCm / 100;
  return Number.isInteger(numberOfMeter) ? `${numberOfMeter}m` : numberOfMeter.toString().replace('.', 'm');
}
