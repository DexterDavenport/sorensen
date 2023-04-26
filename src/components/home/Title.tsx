import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


type HighlightProps = {
  children: string;
};

export class Highlight extends React.Component<HighlightProps> {
  public render(): JSX.Element {
    return (
      <span style={{ color: '#4b94b7' }}>{this.props.children}</span>
    );
  }
}

type TitleProps = {
  children: React.ReactNode;
};

export class Title extends React.Component<TitleProps> {
  public render(): JSX.Element {
    return (
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h3" mt={10} mb={5} sx={{fontFamily: "Krona One"}}>
          {this.props.children}
        </Typography>
      </Stack>
    );
  }
}