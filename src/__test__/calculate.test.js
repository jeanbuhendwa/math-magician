import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('calculate', () => {
  it('should handle AC button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should handle number button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '2');
    expect(result).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });
  it('should handle decimal button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '.');
    expect(result).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });
  it('should handle equal button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({
      total: operate('10', '5', '+'),
      next: null,
      operation: null,
    });
  });
  it('should handle operation button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '-');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });
});
