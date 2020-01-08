import { NOW, MIN, HOUR, DAY, MONTH, YEAR } from './util/date';
import calc from '../src/lib/calculate';
import { en } from '../src';

describe('calculate', () => {
  const lang = en();

  // just now
  it('just now', () => {
    expect(calc(NOW, lang)).toBe('just now');
  });

  it('just now', () => {
    expect(calc(NOW + MIN - 1, lang)).toBe('just now');
  });

  it('just now', () => {
    expect(calc(NOW - MIN + 1, lang)).toBe('just now');
  });

  // min

  it('1 minute from now', () => {
    expect(calc(NOW + MIN, lang)).toBe('1 minute from now');
  });

  it('1 minute ago', () => {
    expect(calc(NOW - MIN, lang)).toBe('1 minute ago');
  });

  it('2 minutes from now', () => {
    expect(calc(NOW + MIN * 2, lang)).toBe('2 minutes from now');
  });

  it('5 minutes ago', () => {
    expect(calc(NOW - MIN * 5, lang)).toBe('5 minutes ago');
  });

  // hour

  it('1 hour from now', () => {
    expect(calc(NOW + HOUR, lang)).toBe('1 hour from now');
  });

  it('1 hour ago', () => {
    expect(calc(NOW - HOUR, lang)).toBe('1 hour ago');
  });

  it('2 hours from now', () => {
    expect(calc(NOW + HOUR * 2, lang)).toBe('2 hours from now');
  });

  it('5 hours ago', () => {
    expect(calc(NOW - HOUR * 5, lang)).toBe('5 hours ago');
  });

  // day

  it('1 day from now', () => {
    expect(calc(NOW + DAY, lang)).toBe('1 day from now');
  });

  it('1 day ago', () => {
    expect(calc(NOW - DAY, lang)).toBe('1 day ago');
  });

  it('2 days from now', () => {
    expect(calc(NOW + DAY * 2, lang)).toBe('2 days from now');
  });

  it('5 days ago', () => {
    expect(calc(NOW - DAY * 5, lang)).toBe('5 days ago');
  });

  // month

  it('1 month from now', () => {
    expect(calc(NOW + MONTH, lang)).toBe('1 month from now');
  });

  it('1 month ago', () => {
    expect(calc(NOW - MONTH, lang)).toBe('1 month ago');
  });

  it('2 months from now', () => {
    expect(calc(NOW + MONTH * 2, lang)).toBe('2 months from now');
  });

  it('5 months ago', () => {
    expect(calc(NOW - MONTH * 5, lang)).toBe('5 months ago');
  });

  // year

  it('1 year from now', () => {
    expect(calc(NOW + YEAR, lang)).toBe('1 year from now');
  });

  it('1 year ago', () => {
    expect(calc(NOW - YEAR, lang)).toBe('1 year ago');
  });

  it('2 years from now', () => {
    expect(calc(NOW + YEAR * 2, lang)).toBe('2 years from now');
  });

  it('5 years ago', () => {
    expect(calc(NOW - YEAR * 5, lang)).toBe('5 years ago');
  });
});
