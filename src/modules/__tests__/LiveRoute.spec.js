import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LiveRoute from '../LiveRoute';

describe('LiveRoute', () => {
  it('should render correctly via snapshot', () => {
    const mockComponent = () => <span>demo</span>;

    const wrapper = shallow(
      <LiveRoute
        path="/demo"
        component={mockComponent}
        liveMessage="Mock loaded"
        aria-live="assertive"
      />
    );

    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly via snapshot for default aria live level', () => {
    const mockComponent = () => <span>demo</span>;

    const wrapper = shallow(
      <LiveRoute
        path="/demo"
        component={mockComponent}
        liveMessage="Mock loaded"
      />
    );

    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
