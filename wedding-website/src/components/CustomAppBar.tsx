import { useState } from "react";

import { Box, IconButton, Drawer } from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";
import DrawerComponent from "./DrawerComponent";

interface CustomAppBarProps {
  pageTitle: string;
}

const CustomAppBar = ({}: CustomAppBarProps) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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
              { name: "Registry", href: "Registry" },
              // { name: "Our Story", href: "our-story" },
              { name: "RSVP", href: "rsvp" },
              { name: "Location", href: "location" },
              { name: "FAQs", href: "FAQs" },
            ]}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </>
    </Box>
  );
};

export default CustomAppBar;
