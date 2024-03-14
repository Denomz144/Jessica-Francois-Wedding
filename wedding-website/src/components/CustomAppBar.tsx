import { useState, ChangeEvent, MouseEvent } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Menu,
  Drawer,
} from "@mui/material";

import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import DrawerComponent from "./DrawerComponent";
import viteLogo from "/vite.svg";
import { useTranslation } from "react-i18next";
interface CustomAppBarProps {
  pageTitle: string;
}

const CustomAppBar = ({ pageTitle }: CustomAppBarProps) => {
  const [auth, setAuth] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const { t } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { sm: "block", md: "none" } }} // Adjust visibility based on screen size
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Makes it better for mobile.
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          <DrawerComponent
            pages={[
              { name: "Home", href: "/" },
              { name: "Our Story", href: "our-story" },
              { name: "RSVP", href: "rsvp" },
              { name: "Location", href: "location" },
            ]}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </>
    </Box>
  );
};
export default CustomAppBar;
