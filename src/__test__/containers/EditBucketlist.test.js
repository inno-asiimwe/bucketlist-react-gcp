import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { EditBucketlist } from '../../containers/EditBucketlist';

describe('EditBucketlist', () => {
  it('It matches its snapshot', () => {
    const output = shallow(<EditBucketlist match={{ params: { id: 1 } }} getBucketlist={() => {}} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
