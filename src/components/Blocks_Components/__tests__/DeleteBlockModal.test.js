
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import DeleteBlockModal from '../DeleteBlockModal';


describe('DeleteBlockModal test', () => {
  it('DeleteBlockModal should match snapshot', () => {
    const component = renderer.create(<DeleteBlockModal
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
