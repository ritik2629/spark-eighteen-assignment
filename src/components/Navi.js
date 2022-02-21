import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './Navi.css'

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed">
        <Toolbar className="tool">
          <Link to="/" className="link">
            <Button color="inherit">First-Page</Button>
          </Link>
          <Link to="/secondcontent" className="link">
            <Button color="inherit">Second-Page</Button>
          </Link>
          <Link to="/thirdcontent" className="link">
            <Button color="inherit">Third-Page</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
