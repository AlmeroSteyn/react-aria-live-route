# react-aria-live-route

With this package you can easily transmit ARIA-LIVE messages to screen readers for router transitions in React Router v4.x.

Router transitions are typically silent for screen reader users if we do not write code to inform them that the application has transitioned.

Using `react-aria-live-route` you can now make use of the exported `LiveRoute` component to replace any `Route` components that should inform screen readers on their activation.

The package requires the installation and usage of [react-aria-live](https://github.com/AlmeroSteyn/react-aria-live) in your application.

## Installation

```
npm install react-aria-live
npm install react-aria-live-route
```

or

```
yarn add react-aria-live
yarn add react-aria-live-route
```

## Usage

The library exports one component, namely `LiveRoute`.

Before using it you will need to wrap your application in the `LiveAnnouncer` component from `react-aria-live`.

Then you can start using the new route component anywhere in your application where you would normally use the `Route` component of react-router v4.x.

Aside from accepting the same props as the `Route` component, this component can also be configured with a non-empty text message that you would like to transmit to screen readers on route activation and an aria-live level of either `polite` or `assertive`.

Not specifying the level will default to `polite`.

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';
import { LiveAnnouncer } from 'react-aria-live';
import LiveRoute from '../../src/modules/LiveRoute';

const Demo1View = () => <span>Demo 1 View</span>;
const Demo2View = () => <span>Demo 2 View</span>;

class Demo extends Component {
  render() {
    return (
      <LiveAnnouncer>
        <Router>
          <div>
            <Link to="/demo1">Goto demo1</Link>
            <br />
            <Link to="/demo2">Goto demo2</Link>
            <main>
              <Switch>
                <LiveRoute
                  exact
                  path="/demo1"
                  component={Demo1View}
                  liveMessage="Demo 1 component loaded"
                  aria-live="polite"
                />
                <LiveRoute
                  path="/demo2"
                  component={Demo2View}
                  liveMessage="Demo 2 component loaded"
                  aria-live="polite"
                />
                <Redirect to="/demo1" />
              </Switch>
            </main>
          </div>
        </Router>
      </LiveAnnouncer>
    );
  }
}

export default Demo;
```

**Please note**: The `LiveAnnouncer` component should ideally be the root component of your app tree to avoid unexpected browser aria-live behaviour.
