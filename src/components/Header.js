import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

// I: This component is used in the Dashboard component

const useStyles = makeStyles({ 
  // I: This isn't used at all... 
  // makeStyles from material ui is meant to override a component's styles https://material-ui.com/styles/advanced/#overriding-styles-classes-prop
  card: {
    minWidth: 270,
    background: "#E0E0E0"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Header = props => {
  const classes = useStyles();

  return (
    <div className="lightgrey">
      <Grid container spacing={1}> {/* I: Material UI component */}
        <Grid item xs={5}>
          <div className="right-header-content">
            <p className="right-header-email">{props.user.email}</p>
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
};
function mapStateToProps(state) {
  // I: Only user in the return component is actually used in the Header component
  return {
    budget: state.plaidReducer.categories.map(
      i => Math.round(100 * i.budget) / 100
    ),
    expenses: state.plaidReducer.categories.map(
      i => Math.round(100 * i.total) / 100
    ),
    user: state.profileReducer.user
  };
}

export default connect(mapStateToProps)(Header);
