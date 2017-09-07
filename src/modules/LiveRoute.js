import React from 'react';
import { Route } from 'react-router-dom';
import { LiveMessage } from 'react-aria-live';
import PropTypes from 'prop-types';

const LiveRoute = ({ liveMessage, 'aria-live': ariaLive, ...rest }) =>
  <div>
    <LiveMessage
      aria-live={ariaLive ? ariaLive : 'polite'}
      message={liveMessage}
    />
    <Route {...rest} />
  </div>;

//Use the same proptypes as react-router Router component with the added strings
LiveRoute.propTypes = {
  liveMessage: PropTypes.string.isRequired,
  'aria-live': PropTypes.string,
  computedMatch: PropTypes.object, // private, from <Switch>
  path: PropTypes.string,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  sensitive: PropTypes.bool,
  component: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  location: PropTypes.object,
};

export default LiveRoute;
