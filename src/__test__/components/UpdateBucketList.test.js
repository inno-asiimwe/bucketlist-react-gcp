import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import UpdateBucketlistForm from '../../components/UpdateBucketList';

describe('UpdateBucketlistForm', () => {
  it('Matches a snapshot', () => {
    const output = shallow(<UpdateBucketlistForm />)
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
