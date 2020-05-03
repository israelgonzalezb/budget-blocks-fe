
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../Title';


describe('Title test', () => {
  it('Title should match snapshot', () => {
    const component = renderer.create(<Title
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
