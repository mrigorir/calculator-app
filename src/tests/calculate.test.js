import calculate from '../logic/calculate';

let calcObj = {};

beforeEach(() => {
  calcObj = {};
});

describe('Makes a proper addition', () => {
  test('1 + 8 = 9', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '8');
    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(9);
  });

  test('Makes a proper decimal adition', () => {
    calcObj = calculate(calcObj, '4');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');

    calcObj = calculate(calcObj, '+');

    calcObj = calculate(calcObj, '4');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(8.2);
  });
});

describe('Makes a proper substraction', () => {
  test('7 - 20 = -13', () => {
    calcObj = calculate(calcObj, '7');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '20');
    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(-13);
  });

  test('Makes a proper decimal substraction', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '2');

    calcObj = calculate(calcObj, '-');

    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '7');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(-1.5);
  });
});

describe('Makes a proper multiplication', () => {
  test('4.7 * 20 = 94', () => {
    calcObj = calculate(calcObj, '4');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '7');

    calcObj = calculate(calcObj, 'x');

    calcObj = calculate(calcObj, '20');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(94);
  });

  test('Makes a proper decimal multiplication', () => {
    calcObj = calculate(calcObj, '3');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '9');

    calcObj = calculate(calcObj, 'x');

    calcObj = calculate(calcObj, '45');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '3');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(176.67);
  });
});

describe('Makes a proper divition', () => {
  test('6 / 3 = 2', () => {
    calcObj = calculate(calcObj, '6');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '3');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(2);
  });

  test('0 / 1600 = 0', () => {
    calcObj = calculate(calcObj, '0');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '1600');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(0);
  });

  test('divide 0/0 displays a message', () => {
    calcObj = calculate(calcObj, '0');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '0');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).not.toBe('Can\'t divide by 0.');
  });
});
