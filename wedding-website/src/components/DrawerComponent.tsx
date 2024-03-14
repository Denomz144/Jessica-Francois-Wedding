import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./components.css";

interface Page {
  href: string;
  name: string;
}

/**
 * Properties that will be used in the Drawer component.
 */
interface DrawerComponentProps {
  /**
   * The pages that will get rendered on the drawer.
   */
  pages: Page[];
  /**
   * Function to handle what will happen when the drawer button is clicked.
   */
  handleDrawerToggle: () => void; // Only accept a void function
}

const DrawerComponent = ({
  pages,
  handleDrawerToggle,
}: DrawerComponentProps) => {
  // This function will be called when a menu item is clicked.
  const handleMenuItemClick = () => {
    handleDrawerToggle(); // Call the function to toggle the drawer state.
  };

  return (
    <Box sx={{ pl: "12px" }}>
      <Box
        sx={{
          alignItems: "center",
          display: "inline-flex",
          width: "100%",
          height: "64px",
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {pages.map((page: Page) => (
          <ListItemButton
            key={page.name}
            component={Link}
            to={page.href}
            onClick={handleMenuItemClick}
          >
            <ListItemText
              className="menu-listitem-button"
              primary={page.name}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default DrawerComponent;
