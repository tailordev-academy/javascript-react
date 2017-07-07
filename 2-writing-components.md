# Writing components

📌 Learning objectives:

- Learn React


## Create React App

Create React apps with no build configuration.

```
$ npm install -g create-react-app
```

```
$ create-react-app seqbook
```


## ~/seqbook

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


## `<App />`

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


## Dealing with data<br>(props / state)


## Receiving user's events


##  Divide & Conquer


## Unit testing / Snapshots
