// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          mt: "10px", // Adjust to match header height
          mb: "60px", // Adjust to match footer height
          flexGrow: 1,
        }}
      >
        <Container
          maxWidth="xl" // Adjust maxWidth as per your design (sm, md, lg, xl)
          sx={{
            padding: "5px", // Add padding inside the container
          }}
        >
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;