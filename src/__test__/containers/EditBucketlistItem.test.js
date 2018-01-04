import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { EditBucketlistItem } from '../../containers/EditBucketlistItem';

describe('EditBucketlistItem', () => {
  it('Matches its Snapshot', () => {
    const output = shallow(<EditBucketlistItem
      match={{ params: { id: 1 } }}
      getBucketlist={() => {}}
      auth={{ Authenticated: true }}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
