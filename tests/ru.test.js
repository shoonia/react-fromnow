import { NOW, MIN, HOUR, DAY, MONTH, YEAR } from './util/date';
import { calculate as calc } from '../src/lib/calculate';
import { ru } from '../src';

describe('RU', () => {
  const lang = ru();

  // just now
  it('только что', () => {
    expect(calc(NOW, lang)).toBe('только что');
  });

  it('только что', () => {
    expect(calc(NOW + MIN - 1, lang)).toBe('только что');
  });

  it('только что', () => {
    expect(calc(NOW - MIN + 1, lang)).toBe('только что');
  });

  // min

  it('через 1 минуту', () => {
    expect(calc(NOW + MIN, lang)).toBe('через 1 минуту');
  });

  it('1 минуту назад', () => {
    expect(calc(NOW - MIN, lang)).toBe('1 минуту назад');
  });

  it('через 2 минуты', () => {
    expect(calc(NOW + MIN * 2, lang)).toBe('через 2 минуты');
  });

  it('5 минут назад', () => {
    expect(calc(NOW - MIN * 5, lang)).toBe('5 минут назад');
  });

  // hour

  it('через 1 час', () => {
    expect(calc(NOW + HOUR, lang)).toBe('через 1 час');
  });

  it('1 час назад', () => {
    expect(calc(NOW - HOUR, lang)).toBe('1 час назад');
  });

  it('через 2 часа', () => {
    expect(calc(NOW + HOUR * 2, lang)).toBe('через 2 часа');
  });

  it('5 часов назад', () => {
    expect(calc(NOW - HOUR * 5, lang)).toBe('5 часов назад');
  });

  // day

  it('через 1 день', () => {
    expect(calc(NOW + DAY, lang)).toBe('через 1 день');
  });

  it('1 день назад', () => {
    expect(calc(NOW - DAY, lang)).toBe('1 день назад');
  });

  it('через 2 дня', () => {
    expect(calc(NOW + DAY * 2, lang)).toBe('через 2 дня');
  });

  it('5 дней назад', () => {
    expect(calc(NOW - DAY * 5, lang)).toBe('5 дней назад');
  });

  // month

  it('через 1 месяц', () => {
    expect(calc(NOW + MONTH, lang)).toBe('через 1 месяц');
  });

  it('1 месяц назад', () => {
    expect(calc(NOW - MONTH, lang)).toBe('1 месяц назад');
  });

  it('через 2 месяца', () => {
    expect(calc(NOW + MONTH * 2, lang)).toBe('через 2 месяца');
  });

  it('5 месяцев назад', () => {
    expect(calc(NOW - MONTH * 5, lang)).toBe('5 месяцев назад');
  });

  // year

  it('через 1 год', () => {
    expect(calc(NOW + YEAR, lang)).toBe('через 1 год');
  });

  it('1 год назад', () => {
    expect(calc(NOW - YEAR, lang)).toBe('1 год назад');
  });

  it('через 2 года', () => {
    expect(calc(NOW + YEAR * 2, lang)).toBe('через 2 года');
  });

  it('5 лет назад', () => {
    expect(calc(NOW - YEAR * 5, lang)).toBe('5 лет назад');
  });
});
