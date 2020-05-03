
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BBButton from '../BBButton';


describe('BBButton test', () => {
  it('BBButton should match snapshot', () => {
    const component = renderer.create(<BBButton
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
