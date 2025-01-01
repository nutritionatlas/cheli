import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { FcHome, FcAbout, FcPhone } from "react-icons/fc"; // Icons from react-icons
import logo from "../assets/images/ninlogo.jpg";

const Header = () => {
  const routes = [
    { key: "home", name: "Home", route: "/", icon: <FcHome /> },
    { key: "about", name: "About", route: "/about", icon: <FcAbout /> },
    { key: "contact", name: "Contact", route: "/contact", icon: <FcPhone /> },
  ];

  return (
    <AppBar position="static" sx={{ background: "#f5f5f5" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "70px", // Increase height
                width: "auto", // Ensure aspect ratio is maintained
              }}
            />
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit">
              🍔 {/* Replace with a menu icon if needed */}
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {routes.map((route) => (
              <Button
                key={route.key}
                sx={{
                  my: 2,
                  color: "#32292F",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  fontSize: "20px", // Increase font size
                  padding: "12px 20px", // Increase padding
                  "&:hover": {
                    backgroundColor: "#E0E0E0",
                  },
                }}
                component={Link}
                to={route.route}
              >
                <span
                  style={{
                    marginRight: "10px",
                    fontSize: "24px", // Increase icon size
                  }}
                >
                  {route.icon}
                </span>
                {route.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
