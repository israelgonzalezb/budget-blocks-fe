import React from "react";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "./DialogTitle";

//I: Used in BudgetGoalModal component

export const Modal_Title = ({handleClose, title}) => {

    return(
        <DialogTitle className="customized-dialog-title" onClose={handleClose}>
          {/* I: Custom presentational component,  a little confused how this component works*/}
          <Typography className="customized-dialog-title">
            {title}
          </Typography>
        </DialogTitle>
    )
}