import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from '../../components/App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('matches snapshot', () => {
    const output = shallow(<App />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

