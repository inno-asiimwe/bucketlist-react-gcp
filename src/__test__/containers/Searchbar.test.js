import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SearchBar from '../../containers/SearchBar';

describe('SearchBar component', () => {
  it('Matches its snapshot', () => {
    const output = shallow(<SearchBar />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
