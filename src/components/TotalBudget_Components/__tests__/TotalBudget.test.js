
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import TotalBudget from '../TotalBudget';


describe('TotalBudget test', () => {
  it('TotalBudget should match snapshot', () => {
    const component = renderer.create(<TotalBudget
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
