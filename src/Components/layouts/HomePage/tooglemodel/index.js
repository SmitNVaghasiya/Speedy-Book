import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import car1 from "../../../images/car1.jpg";

export default function BasicModal() {
  return (
    <Card sx={{ ml: 3, mt: 4, maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 175 }}
        image={require("../../../images/car1.jpg")}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lamborghini
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Immerse yourself in the opulence of a Lamborghini interior,
          meticulously crafted for comfort and style.Choose from our range of
          rental packages to suit your needs, whether it's a weekend getaway or
          a special event
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Immerse yourself in the opulence of a Lamborghini interior,
          meticulously crafted for comfort and style.Choose from our range of
          rental packages to suit your needs, whether it's a weekend getaway or
          a special event
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>
  );
}
