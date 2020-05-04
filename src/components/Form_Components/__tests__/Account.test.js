
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Account from '../Account';


describe('Account test', () => {
  it('Account should match snapshot', () => {
    const component = renderer.create(<Account
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
