
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BackContinue from '../BackContinue';


describe('BackContinue test', () => {
  it('BackContinue should match snapshot', () => {
    const component = renderer.create(<BackContinue
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
