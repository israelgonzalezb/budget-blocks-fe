
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BudgetGoal from '../BudgetGoal';


describe('BudgetGoal test', () => {
  it('BudgetGoal should match snapshot', () => {
    const component = renderer.create(<BudgetGoal
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
