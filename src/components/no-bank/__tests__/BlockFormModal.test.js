
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BlockFormModal from '../BlockFormModal';


describe('BlockFormModal test', () => {
  it('BlockFormModal should match snapshot', () => {
    const component = renderer.create(<BlockFormModal
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
