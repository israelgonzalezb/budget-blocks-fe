
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ModalDialog from '../ModalDialog';


describe('ModalDialog test', () => {
  it('ModalDialog should match snapshot', () => {
    const component = renderer.create(<ModalDialog
      handleClose={undefined} modalTitle={undefined} maxWidth={undefined} ariaLabelledBy={undefined} handleSubmit={undefined} backContinue={undefined} dialogActions={undefined} submitEdit={undefined} open={undefined} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
