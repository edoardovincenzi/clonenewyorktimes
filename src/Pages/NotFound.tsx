import { Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>404 page not found</h1>
      <p>We are sorry but the page you are looking for does not exist.</p>
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <Button variant="contained">
          <ArrowBackIcon />
          Back to home
        </Button>
      </NavLink>
    </Container>
  );
};

export default NotFound;
