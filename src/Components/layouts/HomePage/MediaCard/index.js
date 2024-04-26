import * as React from "react";
import Modal from "@mui/material/Modal";
import BasicModal from "../tooglemodel/index";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  marginTop: "10vh",
  marginBottom: "10vh",
  position: "relative",
};

export default function MediaCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      {" "}
      {/* Add margin bottom */}
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
            meticulously crafted for comfort and style. Choose from our range of
            rental packages to suit your needs, whether it's a weekend getaway
            or a special event.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Book</Button>
          <Button onClick={handleOpen} size="small">
            Read More
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          width: "600px",
          height: "600px",
          ml: 45,
          mt: 7,
          style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "500px",
            height: "520px",
            ml: 5,
            mt: 7,
            mb: 9,
          }}
        >
          <BasicModal />
        </Card>
      </Modal>
    </div>
  );
}
