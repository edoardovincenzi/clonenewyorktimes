import styled from "styled-components";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export const BoxNavbar = styled(Box)`
  background-color: #1976d2;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 4rem;
  z-index: 999;
`;
export const AppBarNavbar = styled(AppBar)`
  &&& {
    flex-direction: row;
    align-items: center;
    box-shadow: none;
  }
`;
export const TypographyNavbar = styled(Typography)`
  flex-grow: 1;
  margin-left: 0px;
  justify-self: flex-start;
  align-items: center;
`;
