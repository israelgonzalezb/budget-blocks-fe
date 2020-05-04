
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SpinnerLoading from '../SpinnerLoading';


describe('SpinnerLoading test', () => {
  it('SpinnerLoading should match snapshot', () => {
    const component = renderer.create(<SpinnerLoading
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
