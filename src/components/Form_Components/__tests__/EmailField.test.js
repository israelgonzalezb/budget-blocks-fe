
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import EmailField from '../EmailField';


describe('EmailField test', () => {
  it('EmailField should match snapshot', () => {
    const component = renderer.create(<EmailField
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
