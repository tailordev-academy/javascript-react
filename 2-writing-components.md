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

Let's start by creating a new React project:

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
├── node_modules
├── package.json
├── public
├── src
└── yarn.lock
```


## The JSX syntax

JSX is an extension of the JavaScript syntax. More precisely, it is an alias for
`React.createElement()`.

**It is not HTML**, yet it is tag-based.


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

TODO


## Dealing with data<br>(props / state)


## Receiving user's events


##  Divide & Conquer


## Unit testing / Snapshots
