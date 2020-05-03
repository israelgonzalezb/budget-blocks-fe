
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import PrivateRoute from '../PrivateRoute';


describe('PrivateRoute test', () => {
  it('PrivateRoute should match snapshot', () => {
    const component = renderer.create(<PrivateRoute
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
