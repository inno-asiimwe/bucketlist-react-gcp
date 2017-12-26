import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Paginate from '../../components/paginate';

describe('Paginate component', () => {
  it('Matches its snapshor', () => {
    const output = shallow(<Paginate />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

