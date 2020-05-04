
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import AddManualBlocks from '../AddManualBlocks';


describe('AddManualBlocks test', () => {
  it('AddManualBlocks should match snapshot', () => {
    const component = renderer.create(<AddManualBlocks
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // hey there...
  });
});
