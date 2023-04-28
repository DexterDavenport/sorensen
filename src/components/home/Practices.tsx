import { Title, Highlight } from "./Title";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ConstructionIcon from '@mui/icons-material/Construction';
import HardwareIcon from '@mui/icons-material/Hardware';
import WaterIcon from '@mui/icons-material/Water';


type ServiceProps = {
  title: string;
  children: string;
  icon?: JSX.Element;
};

function Service(props: ServiceProps) {
  return (
    <Card sx={{ height: '100%' }}>
        <CardContent>
            {/* <Stack alignItems="center" my={4}>
                {props.icon}
            </Stack> */}

            <Typography variant="h4" component="div" mb={1}>
                {props.title}
            </Typography>
            
            <Typography variant="body1" fontWeight="lighter">
                {props.children}
            </Typography>
        </CardContent>
    </Card>
  );
}

type ServicesProps = {
  id: string;
};

export default function Services(props: ServicesProps): JSX.Element {
  return (
    <Box id={props.id}>
      <Title>
        Our <Highlight>Practices</Highlight>
      </Title>

      <Grid container spacing={3} alignItems="stretch">
        <Grid xs={12} sm={4}>
          <Service title="Arbitration, and Mediation" >
            Resolve disputes with a neutral third party outside of court. Faster, less formal, and less adversarial than going to court.
          </Service>
        </Grid>

        <Grid xs={12} sm={4}>
          <Service title="Corporate and Commercial Litigation">
            Resolve business disputes. Our experienced litigators can help you protect your interests and achieve the best outcome.          
          </Service>
        </Grid>

        <Grid xs={12} sm={4}>
          <Service title="Contracts and Business Agreements">
            Get legal advice for your business contracts and agreements. Our team can draft, review, and negotiate agreements to protect your interests and minimize risk.
          </Service>
        </Grid>
      </Grid>
    </Box>
  )
}