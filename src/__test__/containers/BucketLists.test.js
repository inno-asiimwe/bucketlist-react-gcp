import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { BucketLists } from '../../containers/BucketLists';

describe('Bucketlists', () => {
  it('matches its snapshot', () => {
    const output = shallow(<BucketLists getBucketlists={() => {}} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
