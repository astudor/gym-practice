import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      xs={{
        gap: { xs: "40px", sm: "122px" },
        mt: { xs: "20px", sm: "32px" }
      }}
    >
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ width: "48px", height: "48px", margin: "0 20px" }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: "none", color: " #3a1212", borderBottom: "1px solid #ff2625" }}>
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "#3a1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
