# Writing components

📌 Learning objectives:

- Learn React


## Create React App

Create React apps with no build configuration:

- Start building an app directly
- No configuration hassle
- Great default settings
- Eject mode

```
$ npm install -g create-react-app
```


## 🚀 Hands-on

1. Install `yarn`: https://yarnpkg.com/lang/en/docs/install/
2. Create a new React project:

``` bash
$ cd react
$ create-react-app seqbook
```

``` bash
$ cd seqbook
$ git init
$ git add . && git commit -m "Initial commit"
```


## ~/react/seqbook

> Seqbook is a DNA sequences book. Users will be able to upload FASTA files,
> manage their sequences (_e.g._, edit metadata), and visualize different
> metrics.

```
.
├── README.md
├── node_modules/
├── package.json
├── public/
├── src/
└── yarn.lock
```


## The JSX syntax

JSX is an extension of the JavaScript syntax. More precisely, it is an alias for
`React.createElement()`.

**It is not HTML**, yet it is tag-based.

React does not require JSX, but it is much more convenient to use it!


### Example please

``` javascript.player.transpiler
const simpleElement = <div />

const complexElement = (
  <div
    message="hello"
    value={anything}
  >
    <p>42</p>
  </div>
)
```


### `React`

``` javascript
import React from 'react';
```

- `React.Component`: allows to create components, _i.e._ JavaScript classes that
  can be instantiated with JSX;
- `React.PureComponent`: allows to create read-only components, _i.e._
  components only used for display purpose.


### `ReactDOM`

``` javascript
import ReactDOM from 'react-dom';
```

- `ReactDOM.render()`: allows to render React components to the DOM, _i.e._
  it converts components into HTML.
- Provides many HTML-like components, _e.g._, `<div />`, `<span />`, etc.


### Class component

``` javascript
class Item extends React.Component {
  // ...

  render() {
    return (
      <p>42</p>
    );
  }
}
```


#### Example

``` javascript.player.web
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
  render() {
    return (
      <p>42</p>
    );
  }
}

ReactDOM.render(<Item />, document.querySelector('#app'));
```


### Stateless/functional component

``` javascript
const Item = () => <li>42</li>;
```

- Fast, simple to read
- Should be preferred
- No lifecycle methods


#### Example

``` javascript.player.web
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Item = () => <li>42</li>;

ReactDOM.render(<Item />, document.querySelector('#app'));
```


### Composition

``` javascript.player.web
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Item = () => <li>42</li>;

const List = () => (
    <ul>
        <Item />
        <Item />
        <Item />
    </ul>
);

ReactDOM.render(<List />, document.querySelector('#app'));
```


### `<App />`

``` javascript.player.web
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
```


## 🚀 Hands-on

1. Remove a few useless files:

    ``` bash
    $ git rm src/*.css src/*.svg public/favicon.ico
    ```

2. Remove corresponding `import` (see `yarn` output)
3. Add Bootstrap CSS into `public/index.html`


### Exercise 2.1

1. Create a `Header` component with a Bootstrap **navbar** (brand image)
2. Import and use it in the existing `App` component


### Solution 2.1

``` javascript
import React from 'react';

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          Seqbook
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
```


### Solution 2.1

``` javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}
```


## Dealing with data<br>(props / state)


### What are props?

**Props** are **read-only** arbitrary inputs.

All React components must act like pure functions with respect to their props.


### Props & class component

In a class-based component, props are accessible with `this.props`:

``` javascript
class Item extends React.Component {
  // ...

  render() {
    return (
      <p>{this.props.value}</p>
    );
  }
}
```


### Props & stateless component

In a functional-based component, props are the first argument of the function:

``` javascript
const Item = (props) => <li>{props.value}</li>;

const List = ({ values }) => (
  {values.map(val => <Item value={val} />)}
);
```


## 🚀 Hands-on


### Exercise 2.2

1. Create a `Item` component
2. Create a `List` component


## What is state?

State allows React components to change their output over time in response to
user actions, network responses, etc.


## 🚀 Hands-on


### Exercise 2.3

1. Create a state in the `App` component


### Exercise 2.4

1. Require the `utils` module made before
2. Use it to create random sequences


## Receiving user's events


##  Divide & Conquer


## Unit testing / Snapshots
