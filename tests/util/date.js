export const NOW = 1556026229910; // Tue Apr 23 2019 16:30:29 GMT+0300 (Eastern European Summer Time)
export const MIN = 60 * 1e3;
export const HOUR = MIN * 60;
export const DAY = HOUR * 24;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365;

Date.now = jest.fn(() => NOW);
