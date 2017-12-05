import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Home } from '../../components/Home';

describe('Home', () => {
  it('matches snapshot', () => {
    const output = shallow(<Home auth={{loaded: true, Authenticated: true}} />)
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
