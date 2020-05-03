
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import DisplayBlocks from '../DisplayBlocks';


describe('DisplayBlocks test', () => {
  it('DisplayBlocks should match snapshot', () => {
    const component = renderer.create(<DisplayBlocks
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
