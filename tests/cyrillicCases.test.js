import cc from '../src/lib/cyrillicCases';

describe('cyrillicCases', () => {
  const titles = [1, 2, 3];

  it('cyrillic cases 1', () => {
    expect(cc(1, titles)).toBe(1);
    expect(cc(21, titles)).toBe(1);
    expect(cc(51, titles)).toBe(1);
  });

  it('cyrillic cases 2', () => {
    expect(cc(2, titles)).toBe(2);
    expect(cc(32, titles)).toBe(2);
    expect(cc(54, titles)).toBe(2);
  });

  it('cyrillic cases 3', () => {
    expect(cc(5, titles)).toBe(3);
    expect(cc(40, titles)).toBe(3);
    expect(cc(12, titles)).toBe(3);
  });
});
