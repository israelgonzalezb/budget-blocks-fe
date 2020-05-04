
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import dialogView2 from '../dialogView2';


describe('dialogView2 test', () => {
  it('dialogView2 should match snapshot', () => {
    const component = renderer.create(<dialogView2
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
