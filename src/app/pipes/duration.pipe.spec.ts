import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform seconds into "mm:ss" format', () => {
    expect(pipe.transform(90)).toBe('1h30min');
    expect(pipe.transform(60)).toBe('1h');
    expect(pipe.transform(1)).toBe('1min');
  });

  it('should return an empty string for undefined value', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return an empty string for null value', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return an empty string for zero value', () => {
    expect(pipe.transform(0)).toBe('');
  });
});
