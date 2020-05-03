
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import LinkAccount from '../LinkAccount';


describe('LinkAccount test', () => {
  it('LinkAccount should match snapshot', () => {
    const component = renderer.create(<LinkAccount
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
