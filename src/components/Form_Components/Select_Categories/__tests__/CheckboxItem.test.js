
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CheckboxItem from '../CheckboxItem';


describe('CheckboxItem test', () => {
  it('CheckboxItem should match snapshot', () => {
    const component = renderer.create(<CheckboxItem
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
