
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import PasswordField from '../PasswordField';


describe('PasswordField test', () => {
  it('PasswordField should match snapshot', () => {
    const component = renderer.create(<PasswordField
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
