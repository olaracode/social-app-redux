import React from "react";
import { AppBar, Container, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material/";
import Logo from "../img/logo.svg";
const NavBar = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#fafafa", color: "black" }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="logo" className="nav-logo" />
            <h1 className="nav-title" sx={{ display: { xs: "none" } }}>
              Foodie
            </h1>
          </Box>
          <Box>
            <MenuRounded color={"primary"} />
          </Box>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
