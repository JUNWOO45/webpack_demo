const { sum, sumOf } = require('./sum.js');

// it('1 + 2 계산', () => {
//   expect(sum(1, 2)).toBe(3);
// });

describe('sum', () => {
  it('1 + 2 계산', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('모든 인자 더하기', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(sumOf(arr)).toBe(15);
  });
});
