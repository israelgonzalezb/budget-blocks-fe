
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import form from '../form';


describe('form test', () => {
  it('form should match snapshot', () => {
    const component = renderer.create(<form
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
