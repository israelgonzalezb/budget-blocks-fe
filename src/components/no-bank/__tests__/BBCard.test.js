
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BBCard from '../BBCard';


describe('BBCard test', () => {
  it('BBCard should match snapshot', () => {
    const component = renderer.create(<BBCard
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
