import { Container, Paper } from "@mui/material";
import React from "react";
import { Loading, Error } from "..";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  GridSectionSingle,
  BoxSectionSingle,
  PSectionSingle,
  ButtonSectionSingle,
} from "./style";

const SectionSingle: React.FC<{ data: string[]; error: string }> = ({
  data,
  error,
}) => {
  const handleButton = (url: any) => {
    window.open(url);
  };

  if (error) {
    return <Error />;
  }
  if (data && data.length !== 0) {
    return (
      <Container maxWidth="xl">
        <GridSectionSingle
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {data.map((item: any, index: number) => {
            const { title, abstract, multimedia, url } = item;
            let { url: urlImg, caption } = multimedia[0];
            return (
              <Paper elevation={3} className="article" key={index}>
                <BoxSectionSingle>
                  <div>
                    <h3>{title}</h3>
                    <PSectionSingle>{abstract}</PSectionSingle>
                  </div>
                </BoxSectionSingle>
                <img src={urlImg} alt={caption} className="article_img" />
                <ButtonSectionSingle
                  variant="contained"
                  onClick={() => handleButton(url)}
                >
                  Articolo completo
                  <ArrowForwardIosIcon />
                </ButtonSectionSingle>
              </Paper>
            );
          })}
        </GridSectionSingle>
      </Container>
    );
  }
  return <Loading />;
};

export default SectionSingle;
