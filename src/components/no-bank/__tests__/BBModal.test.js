
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BBModal from '../BBModal';


describe('BBModal test', () => {
  it('BBModal should match snapshot', () => {
    const component = renderer.create(<BBModal
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
