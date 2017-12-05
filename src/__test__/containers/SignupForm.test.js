import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import RegisterUser from '../../containers/SignupForm';

describe('RegisterUser', () => {
  it('Matches its snapshot', () => {
    const output = shallow(<RegisterUser />)
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
