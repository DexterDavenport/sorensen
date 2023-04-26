import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type HeaderProps = {
  id: string;
};

export default function Header(props: HeaderProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Paper
      id={props.id}
      elevation={2}
      sx={{
        width: "100%",
        backgroundColor: "#B82201",
        backgroundImage:
          'linear-gradient(160deg, #003c5a, #003c5a11), url("./images/car-crash.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: 0,
      }}
    >
      <Container sx={{ paddingBottom: 15, paddingTop: 20 }}>
        <Grid container>
          <Grid xs={12} md={8}>
            <Typography
              variant="h2"
              color="white"
              mb={3}
              sx={{ fontFamily: "Krona One" }}
            >
              <span style={{ color: "#B82201" }}>Sorensen</span>  Law & Associates
            </Typography>

            <Typography variant="h4" color="white" mb={6}>
            Clients Trust Us to Prosper, Preserve, and Protect: Discover Our Unmatched Legal Services at Sorensen Law & Associates
            </Typography>

            <Stack direction="row" spacing={3}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={handleOpen}
              >
                Get A Free Estimate
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Give us a call or send us an email for your <span style={{ color: "#4b94b7" }}>FREE</span> quote
                  </Typography>
                  <p>
                    Call us at{" "}
                    <span style={{ color: "#4b94b7" }}>480.495.2463</span>
                  </p>
                  <p>
                    Or email us at{" "}
                    <span style={{ color: "#4b94b7" }}>
                      integritywds@gmail.com
                    </span>
                  </p>
                  <p>Make sure to have the following information ready:</p>
                  <ul>
                    <li>Name</li>
                    <li>Address</li>
                    <li>best way for us to contact you (email/phone number)</li>
                  </ul>
                </Box>
              </Modal>
              <Button sx={{ color: "white" }} endIcon={<ArrowForwardIcon />}>
                View Our Practices
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
