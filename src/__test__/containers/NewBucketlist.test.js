import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { NewBucketlist } from '../../containers/NewBucketlist';

describe('NewBucketlist', () => {
  it('Matches its snapshot', () => {
    const output = shallow(<NewBucketlist
      handleSubmit={() => {}}
      auth={{ Authenticated: true }}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
