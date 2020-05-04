
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import LinkedTransactions from '../LinkedTransactions';


describe('LinkedTransactions test', () => {
  it('LinkedTransactions should match snapshot', () => {
    const component = renderer.create(<LinkedTransactions
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
