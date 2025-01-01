import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        color: "#32292F",
        padding: "20px 0", // Increase padding for more height
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6" // Larger font size
        sx={{ fontWeight: 500 }} // Optional: Adjust font weight
      >
        Copyright © Nutrition Atlas India 2024.
      </Typography>
    </Box>
  );
};

export default Footer;
