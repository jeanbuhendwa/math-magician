import operate from '../logic/operate';

describe('operate', () => {
  it('should return the correct result for addition', () => {
    expect(operate('1', '2', '+')).toEqual('3');
  });
  it('should return the correct result for subtraction', () => {
    expect(operate('5', '2', '-')).toEqual('3');
  });
  it('should return the correct result for multiplication', () => {
    expect(operate('2', '3', 'x')).toEqual('6');
  });
  it('should return the correct result for division', () => {
    expect(operate('6', '3', '÷')).toEqual('2');
  });
  it('should return an error message for division by zero', () => {
    expect(operate('6', '0', '÷')).toEqual("Can't divide by 0.");
  });
  it('should return the correct result for modulo', () => {
    expect(operate('5', '2', '%')).toEqual('1');
  });
  it('should return an error message for modulo with divisor zero', () => {
    expect(operate('5', '0', '%')).toEqual(
      "Can't find modulo as can't divide by 0.",
    );
  });
  it('should throw an error for an unknown operation', () => {
    expect(() => operate('1', '2', 'unknown')).toThrow(
      "Unknown operation 'unknown'",
    );
  });
});
