import React from 'react';
import { render, toISO } from './util/helpers';
import { NOW, HOUR } from './util/date';
import Fromnow from '../src';

describe('<Fromnow date={date}>', () => {
  it('just now', () => {
    const { type, props, children } = render(<Fromnow date={NOW} />);

    expect(type).toBe('time');
    expect(props.dateTime).toBe(toISO(NOW));
    expect(children[0]).toBe('just now');
  });

  it('1 hour ago', () => {
    const date = NOW - HOUR;
    const { type, props, children } = render(<Fromnow date={date} />);

    expect(type).toBe('time');
    expect(props.dateTime).toBe(toISO(date));
    expect(children[0]).toBe('1 hour ago');
  });

  it('1 hour from now', () => {
    const date = NOW + HOUR;
    const { type, props, children } = render(<Fromnow date={date} />);

    expect(type).toBe('time');
    expect(props.dateTime).toBe(toISO(date));
    expect(children[0]).toBe('1 hour from now');
  });

  it('2 hours ago', () => {
    const date = NOW - HOUR * 2;
    const { type, props, children } = render(<Fromnow date={date} />);

    expect(type).toBe('time');
    expect(props.dateTime).toBe(toISO(date));
    expect(children[0]).toBe('2 hours ago');
  });

  it('2 hours from now', () => {
    const date = NOW + HOUR * 2;
    const { type, props, children } = render(<Fromnow date={date} />);

    expect(type).toBe('time');
    expect(props.dateTime).toBe(toISO(date));
    expect(children[0]).toBe('2 hours from now');
  });

  it('invalid date', () => {
    const { type, props, children } = render(<Fromnow date={'time'} />);

    expect(type).toBe('time');
    expect(props.dateTime).toBeUndefined();
    expect(children).toBeNull();
  });
});
