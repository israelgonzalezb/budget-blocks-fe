
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import TableHead from '../TableHead';


describe('TableHead test', () => {
  it('TableHead should match snapshot', () => {
    const component = renderer.create(<TableHead
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
