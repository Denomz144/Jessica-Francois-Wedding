import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomAppBar from "./CustomAppBar";

const LoadingComponent = () => {
  //States
  const [pageTitle, setPageTitle] = useState<string>("");

  const location = useLocation();
  const hideAppBarOnPaths = ["/login"]; // Paths where the AppBar should not be shown
  const showAppBar = !hideAppBarOnPaths.includes(location.pathname);

  useEffect(() => {
    //DEBUG
    console.log("DEBUG: Location: ", location);
    //Change the title thats being used in the app bar
    switch (location.pathname) {
      case "/":
        setPageTitle("home.title");
        break;
      case "/about":
        setPageTitle("about.title");
        break;
      case "/login":
        setPageTitle("Log In");
        break;
      case "/orders":
        setPageTitle("orders.title");
        break;
      case "/register":
        setPageTitle("Register");
        break;
      default:
        setPageTitle("IM Management");
    }
  }, [location]);

  return (
    <>
      {showAppBar && <CustomAppBar pageTitle={pageTitle} />}
      <Outlet />
    </>
  );
};

export default LoadingComponent;
