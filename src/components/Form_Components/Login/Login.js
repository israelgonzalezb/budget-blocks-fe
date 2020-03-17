import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/LoginActions";
import Title from "../Title";
import PasswordField from "../PasswordField";
import Account from "../Account";
import { CheckEmptyFields } from "../CheckEmpyFields";
import { ChangeCheckField } from "../ChangeCheckField";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import "./loginStyle.css";
import Container from "@material-ui/core/Container";
import Loader from "react-loader-spinner";

export const Login = props => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
    /* String.prototype.trim()
    The trim() method removes whitespace from both ends of a string.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim*/

    setValues(ChangeCheckField(e, values)); 
    //I: adds error messages to inputs if any are empty... 
    //seems redundant considering there's also "CheckEmptyFields" in handleSubmit, so we'll need to look at this closer
  };

  const handleSubmit = e => {
    e.preventDefault();
    const check = CheckEmptyFields(user, values);
    if (check instanceof Object) { // I: If check is an object, it means one of the fields checked were empty
      setValues({ ...check });
    } else { 
      //I: check === false when there are no empty fields, and so we can try to log the user in
      // We also pass in props.history because the loginUser action redirects the user on successful login
      props.loginUser(user, props.history);
      setUser({ email: "", password: "" });
    }
  };

  const [values, setValues] = useState({
    showPassword: false,
    password: {
      error: false,
      helperText: ""
    },
    email: {
      error: false,
      helperText: ""
    },
    button: {
      disabled: false
    }
  });

  useEffect(() => { 
    //I: handleChange updates the user variable and checks for empty inputs on every key press
    // this useEffect hook then controls whether the submit button is disabled or not, depending on those input checks
    if (values.password.error === false && values.email.error === false) {
      setValues({ ...values, button: { disabled: false } });
    } else {
      setValues({ ...values, button: { disabled: true } });
    }
  }, [user]);
  return (
      
    <div className="SignIn">
      <Container maxWidth="sm"> {/* I: material ui component */}
        <Title title="Sign In" /> {/* I: custom presentational component that uses Typography material ui component*/}

        <form className="SignInForm" onSubmit={handleSubmit}>
          <FormControl variant="filled"> {/* I: material ui component */}
            <Typography className="label">E-Mail Address</Typography> {/* I: material ui component */}
            <TextField
              error={values.email.error}
              helperText={values.email.helperText}
              placeholder="E-Mail Address"
              type="text"
              name="email"
              onChange={handleChange}
              value={user.email}
              variant="outlined"
            /> {/* I: material ui component */}
          </FormControl>

          <PasswordField
            name="password"
            placeholder="Password"
            label="Password"
            error={values.password.error}
            value={user.password}
            handleChange={handleChange}
            helperText={values.password.helperText}
          /> {/* I: Custom component that handles the visibility of the password
          uses InputAdornment component: https://material-ui.com/components/text-fields/#input-adornments */}
          <Account message="Need an account?" link="/register" /> {/* I: Custom component that renders message and redirects to the passed in link */}
          {
                props.error?<p style={{display: "inline"}} className="errorMessage">{props.error}</p>:<p className="errorMessage"></p>
              } {/*I: This is where any errors returned from the login reducer are rendered, pulled in with mapStateToProps */}

          <Button
            variant="outlined"
            className="signInBtn"
            type="submit"
            disabled={values.button.disabled}
          > {/* I: material ui component */}
            {props.isFetching ? (
              <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={10000} //3 secs
              /> {/* I: react-loader-spinner component */}
            ) : (
              <p>Sign In</p>
            )}
          </Button>
        </form>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isFetching: state.loginReducer.isFetching,
    error: state.loginReducer.error
  };
}

export default connect(mapStateToProps, { loginUser })(Login);
