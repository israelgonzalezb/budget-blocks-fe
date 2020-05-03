
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import DisplayTrans from '../DisplayTrans';


describe('DisplayTrans test', () => {
  it('DisplayTrans should match snapshot', () => {
    const component = renderer.create(<DisplayTrans
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
