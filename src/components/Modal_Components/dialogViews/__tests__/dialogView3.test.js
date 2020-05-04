
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import dialogView3 from '../dialogView3';


describe('dialogView3 test', () => {
  it('dialogView3 should match snapshot', () => {
    const component = renderer.create(<dialogView3
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
