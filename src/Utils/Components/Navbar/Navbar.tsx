import Toolbar from "@mui/material/Toolbar";
import { useParams, NavLink } from "react-router-dom";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavbarListSection from "../NavbarListSection";
import { AppBarNavbar, BoxNavbar, TypographyNavbar } from "./style";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  const { nameSection } = useParams();

  return (
    <BoxNavbar>
      <Container maxWidth="xl">
        <AppBarNavbar position="static">
          <TypographyNavbar variant="body2">
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
          </TypographyNavbar>
          <Toolbar style={{ paddingRight: "0px" }}>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              {nameSection ? "Section: " + nameSection : "Section"}
            </Typography>
            <NavbarListSection />
          </Toolbar>
        </AppBarNavbar>
      </Container>
    </BoxNavbar>
  );
}
