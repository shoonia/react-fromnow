# react-fromnow

React component for display time from now

## Installing

```bash
npm install react-fromnow
# or
yarn add react-fromnow
```

## Basic usage

Below examples assumes `Date.now()` is `1556026229910`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Fromnow from 'react-fromnow';

ReactDOM.render(
  <Fromnow date={Date.now()} />,
  document.getElementById('root')
);
```
```html
<time dateTime="2019-04-23T13:30:29.910Z">just now</time>
```

## Set tag

Default use HTML tag [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

```js
<Fromnow tag="span" date={Date.now() - (1e3 * 60 * 60)} />
```
```html
<span data-datetime="2019-04-23T12:30:29.910Z">1 hour ago</span>
```

## No tag

Set any false expression `"" | false | null | undefined ` and component return just string.

```js
<Fromnow tag="" date={Date.now() + (1e3 * 60 * 60)} />
```
```html
"1 hour from now"
```

## Set attributes

```js
<Fromnow className="from__now" date={Date.now() - (1e3 * 60 * 60 * 2)} />
```
```html
<time class="from__now" dateTime="2019-04-23T11:30:29.910Z">2 hours ago</time>
```

## License

[MIT](./LICENSE)