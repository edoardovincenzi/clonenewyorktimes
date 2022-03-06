import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ContainerError } from "./style";
import { handleButton } from ".";

const Error = () => {
  const { nameSection } = useParams();

  return (
    <ContainerError
      maxWidth="lg"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Errore</h1>
      <p>Non riusciamo a chiamare la pagina richiesta </p>
      {nameSection ? (
        <>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <Button variant="contained">
              <ArrowBackIcon />
              Back to home
            </Button>
          </NavLink>
          <p>Oppure</p>
        </>
      ) : (
        <></>
      )}

      <Button onClick={handleButton} variant="contained">
        Ricarica la pagina
      </Button>
    </ContainerError>
  );
};

export default Error;
