
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import DeleteTranModal from '../DeleteTranModal';


describe('DeleteTranModal test', () => {
  it('DeleteTranModal should match snapshot', () => {
    const component = renderer.create(<DeleteTranModal
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
