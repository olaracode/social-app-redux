import React, { useState } from "react";
import {
  Container,
  Paper,
  Box,
  TextField,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Logo from "../img/logo.svg";
const Home = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userGender, setUserGender] = useState("");
  return (
    <div className="main">
      <Container>
        <Paper sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              justifyContent: "center",
            }}
          >
            <img src={Logo} alt="Logo" className="login-logo" />
            <h1>Foodie</h1>
          </Box>
          <h3>
            Find and share recipes with chefs and food enthusiasts all over the
            world
          </h3>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "90%",
              margin: "auto",
            }}
          >
            <h2>{isSignUp ? "Sign Up" : "LogIn"}</h2>
            {isSignUp ? (
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    sx={{ paddingBottom: "15px", width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    sx={{ paddingBottom: "15px", width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    sx={{ paddingBottom: "15px", width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Select
                    value={userGender}
                    sx={{ width: "100%" }}
                    label="Gender"
                    onChange={(e) => setUserGender(e.target.value)}
                  >
                    <MenuItem disabled value="">
                      Gender
                    </MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"nonBinary"}>Non-Binary</MenuItem>
                    <MenuItem value={"other"}>Other/Rather Not Say</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{ paddingBottom: "15px", width: "100%" }}
                  />
                </Grid>
              </Grid>
            ) : (
              <>
                <TextField
                  label="Username/Email"
                  variant="outlined"
                  sx={{ paddingBottom: "15px", width: "100%" }}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  sx={{ paddingBottom: "15px", width: "100%" }}
                />{" "}
              </>
            )}

            <Button
              variant={"outlined"}
              sx={{
                alignSelf: "flex-end",
                color: "#ef3c56",
                borderColor: "#ef3c56",
              }}
            >
              {isSignUp ? "Sign Up" : "LogIn"}
            </Button>
            <p>
              Don't have an account?
              <span
                className="span-link"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                }}
              >
                {" "}
                Click Here
              </span>
            </p>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
