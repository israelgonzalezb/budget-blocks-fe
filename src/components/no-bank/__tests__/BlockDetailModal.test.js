
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BlockDetailModal from '../BlockDetailModal';


describe('BlockDetailModal test', () => {
  it('BlockDetailModal should match snapshot', () => {
    const component = renderer.create(<BlockDetailModal
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
