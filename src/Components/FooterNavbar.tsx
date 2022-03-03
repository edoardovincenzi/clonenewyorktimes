import { Outlet } from "react-router-dom";
import { Navbar } from ".";

const FooterNavbar: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default FooterNavbar;
