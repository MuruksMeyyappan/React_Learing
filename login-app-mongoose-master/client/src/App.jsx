import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import {
  Paper,
  Grid,
  Button,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
  Snackbar,
  makeStyles
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Send } from "@material-ui/icons";

import { userActions } from "./actions";
import { useInput, useCheckBox } from "./hooks";
import "./App.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  section1: {
    margin: theme.spacing(3, 2)
  },
  section2: {
    margin: theme.spacing(2)
  },
  section3: {
    margin: theme.spacing(1, 1, 1, 2)
  },
  label: {
    margin: theme.spacing(0, 0, 0, 2),
    color: theme.palette.secondary
  }
}));

function App() {
  const classes = useStyles();
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [age, setAge] = useInput("");
  const [dob, setDob] = useInput(null);
  const [permanentAddress, setPermanentAddress] = useInput("");
  const [currentAddress, setCurrentAddress] = useInput("");
  const [isSameAddress, setIsSameAddress] = useCheckBox(false);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenFailure(false);
  };

  const userDetails = useSelector(state => state.userReducers.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userDetails) return;
    if (userDetails.user) {
      setOpenSuccess(true);
    } else if (userDetails.error) {
      setOpenFailure(true);
      setErrorMessage(userDetails.message);
    }
  }, [userDetails]);

  const handleRegister = () => {
    dispatch(
      userActions.registerUserRequest({
        name,
        email,
        password,
        age,
        dob,
        permanentAddress,
        currentAddress
      })
    );
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} xl={4}>
        <Paper variant="outlined">
          <Grid container alignItems="center" className={classes.section1}>
            <Grid item>
              <Typography gutterBottom variant="h3">
                Register
              </Typography>
            </Grid>
          </Grid>
          <FormGroup>
            <FormControl className={classes.section2}>
              <TextField
                label="Name"
                placeholder="Enter your name"
                variant="outlined"
                helperText=""
                color="primary"
                value={name}
                onChange={setName}
              />
            </FormControl>
            <FormControl className={classes.section2}>
              <TextField
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
                helperText=""
                color="primary"
                value={email}
                onChange={setEmail}
              />
            </FormControl>
            <FormControl className={classes.section2}>
              <TextField
                label="Password"
                placeholder="Enter your password"
                variant="outlined"
                helperText=""
                color="primary"
                value={password}
                onChange={setPassword}
              />
            </FormControl>
            <FormControl className={classes.section2}>
              <TextField
                label="Age"
                variant="outlined"
                helperText=""
                type="number"
                color="primary"
                value={age}
                onChange={setAge}
              />
            </FormControl>
            <FormControl className={classes.section2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  clearable
                  disableFuture
                  inputVariant="outlined"
                  placeholder="dd/mm/yyyy"
                  label="Date Of Birth"
                  format="dd/MM/yyyy"
                  helperText=""
                  value={dob}
                  onChange={setDob}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
            <FormControl className={classes.section2}>
              <TextField
                label="Current Address"
                multiline
                rows="4"
                placeholder="Enter your current address"
                variant="outlined"
                value={currentAddress}
                onChange={setCurrentAddress}
              />
            </FormControl>
            <FormControlLabel
              className={classes.section3}
              control={
                <Checkbox checked={isSameAddress} onChange={setIsSameAddress} />
              }
              label="Same as current address"
            />
            <FormControl className={classes.section2}>
              <TextField
                label="Permanent Address"
                multiline
                rows="4"
                placeholder="Enter your permanent address"
                variant="outlined"
                value={permanentAddress}
                onChange={setPermanentAddress}
              />
            </FormControl>
            <FormControl className={classes.section2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                endIcon={<Send />}
                onClick={handleRegister}
              >
                Register
              </Button>
            </FormControl>
          </FormGroup>
          <Snackbar
            open={openSuccess}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              User has been registered. Go to login screen.
            </Alert>
          </Snackbar>
          <Snackbar
            open={openFailure}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              User registration failed.{" "}
              {errorMessage ? errorMessage : "Try again later."}
            </Alert>
          </Snackbar>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
