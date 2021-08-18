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

describe('multiply tests', () => {
  test('4 * 5 = 20', () => {
    expect(Number(operate(4, 5, 'x'))).toBe(20);
  });
  test('3 * 4 != 56900', () => {
    expect(Number(operate(3, 4, 'x'))).not.toBe(56900);
  });
});
describe('division tests', () => {
  test('24 / 3 = 8', () => {
    expect(Number(operate(24, 3, '÷'))).toBe(8);
  });
  test('0 / 45 != 9', () => {
    expect(Number(operate(0, 45, '÷'))).not.toBe(9);
  });
});
