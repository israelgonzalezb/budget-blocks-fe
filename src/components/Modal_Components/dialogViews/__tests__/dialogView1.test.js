
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import dialogView1 from '../dialogView1';


describe('dialogView1 test', () => {
  it('dialogView1 should match snapshot', () => {
    const component = renderer.create(<dialogView1
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
