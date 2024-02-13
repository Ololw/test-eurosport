import formatWeightFromGramsToKg from '../../../../src/shared/utils/stats/format-weight.util';

const testCases: { weightResponse: number; expected: string }[] = [
  {
    weightResponse: 81000,
    expected: '81 kg',
  },
  {
    weightResponse: 85000,
    expected: '85 kg',
  },
  {
    weightResponse: 81500,
    expected: '81.5 kg',
  },
  {
    weightResponse: 500,
    expected: '0.5 kg',
  },
];

describe('Format weight spec', () => {
  it("Calling formatWeight with an arg that isn't a number should have 'No info' as a result", () => {
    const weightNan: number = 'lol' as unknown as number;
    expect(formatWeightFromGramsToKg(weightNan)).toBe('No info');
  });

  testCases.forEach((testCase) => {
    it(`${testCase.weightResponse} should return ${testCase.expected}`, () => {
      expect(formatWeightFromGramsToKg(testCase.weightResponse)).toBe(testCase.expected);
    });
  });
});
