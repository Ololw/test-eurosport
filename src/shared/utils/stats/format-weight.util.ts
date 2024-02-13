/**
 * @param weightInGram The weight in gram to format
 * @returns A string describing the weight in kg
 */
export default function formatWeightFromGramsToKg(weightInGram: number): string {
  if (isNaN(weightInGram)) {
    return 'No info';
  }

  const numberOfKg = weightInGram / 1000;
  return `${numberOfKg} kg`;
}
