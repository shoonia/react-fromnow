import { NOW, MIN, DAY, MONTH, YEAR } from './util/date';
import { createFromnow, ua, ru, en } from '../src';

describe('fromnow', () => {

  // en
  it('createFromnow en', () => {
    const calc = createFromnow();

    expect(calc(NOW + MIN)).toBe('1 minute from now');
  });

  it('createFromnow en', () => {
    const calc = createFromnow(en);

    expect(calc(NOW)).toBe('just now');
  });

  it('createFromnow en with ops', () => {
    const calc = createFromnow(en, {
      now: '',
      was: '0_o %%',
      will: ''
    });

    expect(calc(NOW - DAY)).toBe('0_o 1 day');
  });

  // ua

  it('createFromnow ua', () => {
    const calc = createFromnow(ua);

    expect(calc(NOW)).toBe('зараз');
  });

  it('createFromnow ua with ops', () => {
    const calc = createFromnow(ua, {
      now: '',
      was: '',
      will: '0_o %% !!'
    });

    expect(calc(NOW + MONTH)).toBe('0_o 1 місяць !!');
  });

  // ru

  it('createFromnow ru', () => {
    const calc = createFromnow(ru);

    expect(calc(NOW - MIN)).toBe('1 минуту назад');
  });

  it('createFromnow ru with ops', () => {
    const calc = createFromnow(ru, {
      now: '',
      was: '0_0 %% 0_0',
      will: ''
    });

    expect(calc(NOW - YEAR * 5)).toBe('0_0 5 лет 0_0');
  });

  it('createFromnow invalid first argument', () => {
    const calc = createFromnow({});

    expect(calc(NOW)).toBe('just now');
  });
});
