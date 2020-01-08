import React from 'react';
import { render, toISO } from './util/helpers';
import { NOW } from './util/date';
import Fromnow, { ua } from '../src';

describe('fromnow attr', () => {
  it('tag', () => {
    const { type, props } = render(<Fromnow date={NOW} tag="span" />);

    expect(type).toBe('span');
    expect(props['data-datetime']).toBe(toISO(NOW));
  });

  it('no tag (null)', () => {
    const str = render(<Fromnow date={NOW} tag={null} />);

    expect(str).toBe('just now');
    expect(typeof str).toBe('string');
  });

  it('no tag (false)', () => {
    const str = render(<Fromnow date={NOW} tag={false} />);

    expect(str).toBe('just now');
    expect(typeof str).toBe('string');
  });

  it('no tag ("")', () => {
    const str = render(<Fromnow date={NOW} tag="" />);

    expect(str).toBe('just now');
    expect(typeof str).toBe('string');
  });

  it('className', () => {
    const { props } = render(<Fromnow date={NOW} className="from__now" />);

    expect(props.className).toBe('from__now');
  });

  it('Invalid date and className', () => {
    const { props, children } = render(<Fromnow date={'0_0'} className="from__now" />);

    expect(props.className).toBe('from__now');
    expect(props.dateTime).toBeUndefined();
    expect(children).toBeNull();
  });

  it('Invalid date and no tag', () => {
    const empty = render(<Fromnow date={'0_0'} tag="" />);

    expect(empty).toBe('');
  });

  it('Set lang', () => {
    const lang = ua();
    const { children } = render(<Fromnow date={NOW} lang={lang} />);

    expect(children[0]).toBe('зараз');
  });
});
