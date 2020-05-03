
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BBTextField from '../BBTextField';


describe('BBTextField test', () => {
  it('BBTextField should match snapshot', () => {
    const component = renderer.create(<BBTextField
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
