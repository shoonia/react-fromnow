import renderer from 'react-test-renderer';

export const render = Element => renderer.create(Element).toJSON();
export const toISO = date => new Date(date).toISOString();
