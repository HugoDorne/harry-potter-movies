import { CustomCurrencyPipe } from './custom-currency.pipe';

describe('CustomCurrencyPipe', () => {
  let pipe: CustomCurrencyPipe;

  beforeEach(() => {
    pipe = new CustomCurrencyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a number into a formatted string', () => {
    const result = pipe.transform(100);
    expect(result).toBe('$100 millions');
  });

  it('should transform a string number into a formatted string', () => {
    const result = pipe.transform('200');
    expect(result).toBe('$200 millions');
  });

  it('should return an empty string if the value is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe('$0');
  });

  it('should return an empty string if the value is null', () => {
    const result = pipe.transform(null);
    expect(result).toBe('$0');
  });

  it('should handle zero correctly', () => {
    const result = pipe.transform(0);
    expect(result).toBe('$0');
  });

  it('should handle negative numbers correctly', () => {
    const result = pipe.transform(-50);
    expect(result).toBe('$0');
  });

  it('should handle decimal numbers correctly', () => {
    const result = pipe.transform(123.45);
    expect(result).toBe('$123.45 millions');
  });
});
