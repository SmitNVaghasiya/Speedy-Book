import React from "react";
import { Card, Grid } from "@mui/material";
import Navbar from "../Navbar/index";
import background from "../../../Components/images/homepage.jpg";
import MediaCard from "../HomePage/MediaCard/index";

const backgroundImageStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "auto",
  height: "auto",
  overflow: "hidden",
  position: "relative",
};

export default function Homepage() {
  return (
    <Grid item style={backgroundImageStyle}>
      <Navbar sx={{ background }} />
      <Grid container height={20}></Grid>
      <Grid>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item>
            <Card
              sx={{
                backgroundPosition: "center",
                width: "500px",
                height: "435px",
                ml: 5,
                mt: 1,
                mb: 3, // Add space at the bottom of the card
                borderRadius: "10px",
              }}
            >
              <MediaCard />
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                backgroundPosition: "center",
                width: "500px",
                height: "435px",
                ml: 5,
                mt: 1,
                mb: 3,
                borderRadius: "10px",
              }}
            >
              <MediaCard />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
