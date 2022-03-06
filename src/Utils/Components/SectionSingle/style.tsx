import styled from "styled-components";
import { Box, Grid, Button } from "@mui/material";

export const GridSectionSingle = styled(Grid)`
  row-gap: 20px;
  column-gap: 4%;
  margin-top: 5rem;
  width: 100%;
`;

export const BoxSectionSingle = styled(Box)`
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const ButtonSectionSingle = styled(Button)`
  &&& {
    align-self: flex-end;
    text-decoration: none;
    margin-top: 24px;
  }
`;

export const PSectionSingle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
