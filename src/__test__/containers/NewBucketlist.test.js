import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { NewBucketlist } from '../../containers/NewBucketlist';

describe('NewBucketlist', () => {
  it('Matches its snapshot', () => {
    const output = shallow(<NewBucketlist handleSubmit={() => {}} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
