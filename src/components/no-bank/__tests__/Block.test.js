
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Block from '../Block';


describe('Block test', () => {
  it('Block should match snapshot', () => {
    const component = renderer.create(<Block
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
