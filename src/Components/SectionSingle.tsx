import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import useDataSection from "../Hooks/useDataSection";
import { Loading, Error } from "../Components/";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useGlobalContext } from "../Hooks/MyGlobalContext";

const SectionSingle: React.FC<{ nameSection: string }> = ({ nameSection }) => {
  let { data, error } = useDataSection(nameSection);
  const { home, errorHome } = useGlobalContext();

  const handleButton = (url: any) => {
    window.open(url);
  };
  data = nameSection === "home" ? home : data;

  if (error || (nameSection === "home" && errorHome)) {
    return <Error />;
  }
  if (data && data.length !== 0) {
    return (
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            rowGap: "20px",
            columnGap: "4%",
            marginTop: "5rem",
            width: "100%",
          }}
        >
          {data.map((item: any, index: number) => {
            const { title, abstract, multimedia, url } = item;
            let { url: urlImg, caption } = multimedia[0];
            return (
              <Paper elevation={3} className="article" key={index}>
                <Box
                  sx={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                  }}
                >
                  <div>
                    <h3>{title}</h3>
                    <p
                      style={{
                        overflow: "scroll",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {abstract}
                    </p>
                  </div>
                </Box>
                <img src={urlImg} alt={caption} className="article_img" />
                <Button
                  variant="contained"
                  style={{
                    alignSelf: "flex-end",
                    textDecoration: "none",
                    marginTop: "24px",
                  }}
                  onClick={() => handleButton(url)}
                >
                  Articolo completo
                  <ArrowForwardIosIcon />
                </Button>
              </Paper>
            );
          })}
        </Grid>
      </Container>
    );
  }
  return <Loading />;
};

export default SectionSingle;
