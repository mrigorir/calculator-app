import operate from '../logic/operate';

describe('Adition tests', () => {
  test('4 + 6 = 10', () => {
    expect(Number(operate(4, 6, '+'))).toBe(10);
  });

  test('5 + 8 != 56', () => {
    expect(Number(operate(5, 8, '+'))).not.toBe(56);
  });
});

describe('substract tests', () => {
  test('2 - 1 = 1', () => {
    expect(Number(operate(2, 1, '-'))).toBe(1);
  });

  test('89-1560 != 4', () => {
    expect(Number(operate(89, 1560, '-'))).not.toBe(4);
  });
});
