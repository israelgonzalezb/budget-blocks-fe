
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import FirstOnboard from '../FirstOnboard';


describe('FirstOnboard test', () => {
  it('FirstOnboard should match snapshot', () => {
    const component = renderer.create(<FirstOnboard
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
