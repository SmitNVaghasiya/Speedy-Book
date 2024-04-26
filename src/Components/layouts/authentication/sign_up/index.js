import { Card, Grid } from "@mui/material";
import RegistrationForm from "./style";
import "./style.css";

export default function Sign_Up() {
  const containerStyle = {
    display: "",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Grid>
        <Grid container sx={containerStyle}>
          <Grid item>
            <Card
              sx={{
                width: "auto",
                height: "auto",
                boxShadow: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RegistrationForm />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
