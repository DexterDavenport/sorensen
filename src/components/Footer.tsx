import { Box, Stack } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DarkModeContext from "./context/DarkMode";

const today = new Date();

type FooterProps = {
  transparent?: boolean;
};

export default function Footer(props: FooterProps): JSX.Element {
  const darkModeContext = React.useContext(DarkModeContext);
  const backgroundColor: string = darkModeContext?.darkMode ? '#121212' : 'primary.main';

  return (
    <Box sx={{ width: "100%", backgroundColor }}>
      <Container>
        <Stack direction="row" justifyContent="space-between" py={3}>
          <Typography color="white">
            COPYRIGHT © {today.getFullYear()} SORENSENLAW&ASSOCIATES -
            ALL RIGHTS RESERVED.
          </Typography> 
        </Stack>
      </Container>
    </Box>
  );
}
