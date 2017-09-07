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

render(<Demo />, document.querySelector('#demo'));
