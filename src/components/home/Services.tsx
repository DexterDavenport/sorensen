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
  icon: JSX.Element;
};

function Service(props: ServiceProps) {
  return (
    <Card sx={{ height: '100%' }}>
        <CardContent>
            <Stack alignItems="center" my={4}>
                {props.icon}
            </Stack>

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
        Our <Highlight>Services</Highlight>
      </Title>

      <Grid container spacing={3} alignItems="stretch">
        <Grid xs={12} sm={4}>
          <Service title="Well construction" icon={<ConstructionIcon sx={{ fontSize: 96 }} />}>
            Our well construction services involve the drilling of new wells, installation of casing or liners, and placement of screens or filters to prevent contamination.
          </Service>
        </Grid>

        <Grid xs={12} sm={4}>
          <Service title="Pump services" icon={<HardwareIcon sx={{ fontSize: 96 }} />}>
            We use top-of-the-line equipment and technology to provide reliable installation, repair, and maintenance of well pumps.
          </Service>
        </Grid>

        <Grid xs={12} sm={4}>
          <Service title="Water drilling" icon={<WaterIcon sx={{ fontSize: 96 }} />}>
            Our water drilling services offer reliable access to clean water. Count on us for safe, efficient, and affordable water drilling services.
          </Service>
        </Grid>
      </Grid>
    </Box>
  )
}