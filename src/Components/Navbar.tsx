import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useParams, NavLink } from "react-router-dom";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavbarListSection from "./NavbarListSection";

export default function Navbar() {
  const { nameSection } = useParams();

  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        position: "fixed",
        width: "100vw",
        top: "0",
        left: "0",
        height: "4rem",
        zIndex: "999",
      }}
    >
      <Container maxWidth="xl">
        <AppBar
          position="static"
          sx={{ flexDirection: "row", alignItems: "center", boxShadow: "none" }}
        >
          <Typography
            variant="body2"
            component="div"
            sx={{
              flexGrow: 1,
              marginLeft: "0px",
              justifySelf: "flex-start",
              alignItems: "center",
            }}
          >
            {nameSection ? (
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                <Button variant="contained">
                  <ArrowBackIcon />
                  Back to home
                </Button>
              </NavLink>
            ) : (
              "Home"
            )}
          </Typography>
          <Toolbar style={{ paddingRight: "0px" }}>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              {nameSection ? "Section: " + nameSection : "Section"}
            </Typography>
            <NavbarListSection />
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}
