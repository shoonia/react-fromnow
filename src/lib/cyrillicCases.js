export const cyrillicCases = (int, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    (int % 100 > 4 && int % 100 < 20)
      ? 2
      : cases[(int % 10 < 5) ? int % 10 : 5]
  ];
};
