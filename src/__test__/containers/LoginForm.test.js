import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { LoginUser } from '../../containers/LoginForm';

describe('LoginForm', () => {
  it('Matches its snapshot', () => {
    const output = shallow(<LoginUser auth={{Authenticated: false}} handleSubmit={() => {}}/>)
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
