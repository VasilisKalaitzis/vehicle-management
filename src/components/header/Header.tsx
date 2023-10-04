import React from "react";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { TOP_BAR_HEIGHT } from "../../constants/app-constants";
import styled from "@emotion/styled";

const HeaderSegments = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "8px",
});

const Header = () => (
  <AppBar
    position="fixed"
    sx={{ height: TOP_BAR_HEIGHT, bgcolor: "white", color: "black" }}
    data-testid="header"
  >
    <Toolbar>
      <HeaderSegments flexGrow="1">
        <WarehouseIcon sx={{ mr: 2, mb: "4px" }} />
        <Typography variant="h6">Warehouse management console</Typography>
      </HeaderSegments>
      <HeaderSegments>
        <AppsIcon fontSize="large" sx={{ ml: 2, mb: "4px" }} />
        <AccountCircleIcon fontSize="large" sx={{ ml: 2, mb: "4px" }} />
      </HeaderSegments>
    </Toolbar>
  </AppBar>
);

export default Header;
