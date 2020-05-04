
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ModalTitle from '../ModalTitle';


describe('ModalTitle test', () => {
  it('ModalTitle should match snapshot', () => {
    const component = renderer.create(<ModalTitle
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
