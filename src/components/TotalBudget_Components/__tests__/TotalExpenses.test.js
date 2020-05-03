
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import TotalExpenses from '../TotalExpenses';


describe('TotalExpenses test', () => {
  it('TotalExpenses should match snapshot', () => {
    const component = renderer.create(<TotalExpenses
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
