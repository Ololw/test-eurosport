import formatHeightFromCmToMeter from '../../../../src/shared/utils/stats/format-height.util';

const testCases: { heightResponse: number; expected: string }[] = [
  {
    heightResponse: 183,
    expected: '1m83',
  },
  {
    heightResponse: 95,
    expected: '0m95',
  },
  {
    heightResponse: 200,
    expected: '2m',
  },
  {
    heightResponse: 0,
    expected: '0m',
  },
];

describe('Format height spec', () => {
  testCases.forEach((testCase) => {
    it(`${testCase.heightResponse} should return ${testCase.expected}`, () => {
      expect(formatHeightFromCmToMeter(testCase.heightResponse)).toBe(testCase.expected);
    });
  });

  it("Calling formatHeight with an arg that isn't a number should have 'No info' as a result", () => {
    const heightNaN: number = 'lol' as unknown as number;
    expect(formatHeightFromCmToMeter(heightNaN)).toBe('No info');
  });
});
