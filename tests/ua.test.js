import { NOW, MIN, HOUR, DAY, MONTH, YEAR } from './util/date';
import { calculate as calc } from '../src/lib/calculate';
import { ua } from '../src';

describe('UA', () => {
  const lang = ua();

  // just now
  it('зараз', () => {
    expect(calc(NOW, lang)).toBe('зараз');
  });

  it('зараз', () => {
    expect(calc(NOW + MIN - 1, lang)).toBe('зараз');
  });

  it('зараз', () => {
    expect(calc(NOW - MIN + 1, lang)).toBe('зараз');
  });

  // min

  it('через 1 хвилину', () => {
    expect(calc(NOW + MIN, lang)).toBe('через 1 хвилину');
  });

  it('1 хвилину тому назад', () => {
    expect(calc(NOW - MIN, lang)).toBe('1 хвилину тому назад');
  });

  it('через 2 хвилини', () => {
    expect(calc(NOW + MIN * 2, lang)).toBe('через 2 хвилини');
  });

  it('5 хвилин тому назад', () => {
    expect(calc(NOW - MIN * 5, lang)).toBe('5 хвилин тому назад');
  });

  // hour

  it('через 1 годину', () => {
    expect(calc(NOW + HOUR, lang)).toBe('через 1 годину');
  });

  it('1 годину тому назад', () => {
    expect(calc(NOW - HOUR, lang)).toBe('1 годину тому назад');
  });

  it('через 2 години', () => {
    expect(calc(NOW + HOUR * 2, lang)).toBe('через 2 години');
  });

  it('5 годин тому назад', () => {
    expect(calc(NOW - HOUR * 5, lang)).toBe('5 годин тому назад');
  });

  // day

  it('через 1 день', () => {
    expect(calc(NOW + DAY, lang)).toBe('через 1 день');
  });

  it('1 день тому назад', () => {
    expect(calc(NOW - DAY, lang)).toBe('1 день тому назад');
  });

  it('через 2 дні', () => {
    expect(calc(NOW + DAY * 2, lang)).toBe('через 2 дні');
  });

  it('5 днів тому назад', () => {
    expect(calc(NOW - DAY * 5, lang)).toBe('5 днів тому назад');
  });

  // month

  it('через 1 місяць', () => {
    expect(calc(NOW + MONTH, lang)).toBe('через 1 місяць');
  });

  it('1 місяць тому назад', () => {
    expect(calc(NOW - MONTH, lang)).toBe('1 місяць тому назад');
  });

  it('через 2 місяці', () => {
    expect(calc(NOW + MONTH * 2, lang)).toBe('через 2 місяці');
  });

  it('5 місяців тому назад', () => {
    expect(calc(NOW - MONTH * 5, lang)).toBe('5 місяців тому назад');
  });

  // year

  it('через 1 рік', () => {
    expect(calc(NOW + YEAR, lang)).toBe('через 1 рік');
  });

  it('1 рік тому назад', () => {
    expect(calc(NOW - YEAR, lang)).toBe('1 рік тому назад');
  });

  it('через 2 роки', () => {
    expect(calc(NOW + YEAR * 2, lang)).toBe('через 2 роки');
  });

  it('5 років тому назад', () => {
    expect(calc(NOW - YEAR * 5, lang)).toBe('5 років тому назад');
  });
});
