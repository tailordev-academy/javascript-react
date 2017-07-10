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
- Provides many HTML-like components (DOM tags), _e.g._, `<div />`, `<span />`, etc.


### Class component

``` javascript
class Item extends React.Component {
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
- Prefer them!


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


### Lists and keys

https://facebook.github.io/react/docs/lists-and-keys.html


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

        <div className="container-fluid">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}
```


## Dealing with data<br>(props)


### What are props?

**Props** are **read-only** arbitrary inputs.

All React components must act like pure functions with respect to their props.
"Pure" functions are called "pure" because they do not attempt to change their
inputs, and always return the same result for the same inputs.


### Props & class component

In a class-based component, props are accessible _via_ the `this.props`
attribute:

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

``` javascript
<Item value=42 />
```


### Props & stateless component

In a functional-based component, props are the first argument of the function:

``` javascript
const Item = (props) => <li>{props.value}</li>;

const List = ({ values }) => (
  {values.map(val => <Item value={val} />)}
);
```

``` javascript
<List values={[42, 'foo', 'bar', 123]} />
```


### Typechecking With PropTypes

https://facebook.github.io/react/docs/typechecking-with-proptypes.html


## 🚀 Hands-on


### Exercise 2.2

1. Create a `Item` component rendering a `title` prop
2. Create a `List` component that renders a list of elements (named
   `sequences`). Each entry is a `Item`:

   ``` javascript
   const sequences = ['foo', 'bar', 'baz'];

   // <List sequences={sequences} />
   ```

3. Use Bootstrap **list-group** style


### Solution 2.2

TODO


## Dealing with data<br>(state)


### What is state?

State allows React components to change their output over time in response to
user actions, network responses, etc. State is similar to props, but it is
private and fully controlled by the component.


## 🚀 Hands-on


### Exercise 2.3

1. Move the `sequences` list to state in the `App` component


### Solution 2.3

TODO


### Exercise 2.4

1. Require the `utils` module created previously
2. Use this module to populate the `sequences` state attribute with random
   sequences


### Solution 2.4

TODO


## Receiving user's events


### Events

https://facebook.github.io/react/docs/handling-events.html


### Converting a function to a class

1. Create an ES6 class with the same name that extends `React.Component`
2. Add a single empty method to it called `render()`
3. Move the body of the function into the `render()` method
4. Replace props with this.props in the `render()` body
5. Delete the remaining empty function declaration


## 🚀 Hands-on


### Exercise 2.5

1. Add a button below the `List` to add new (random) sequences to it
2. Allow to select a list item and display its information on the right panel
   (you have to create this panel too)


### Solution 2.5

TODO


### Forms


### Lifting state up


##  Divide & Conquer


### Thinking in React

https://facebook.github.io/react/docs/thinking-in-react.html


## Unit testing / Snapshots
