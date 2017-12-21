import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ShowBucketlist } from '../../containers/Bucketlist';

describe('ShowBucketlist', () => {
  it('Matches its snapshot', () => {
    const output = shallow(<ShowBucketlist
      match={{ params: { id: 1 } }}
      getBucketlist={() => {}}
      auth={{ Authenticated: true }}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
