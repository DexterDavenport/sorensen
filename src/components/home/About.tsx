import { Title, Highlight } from "./Title";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


type AboutProps = {
  id: string;
};

export default function About(props: AboutProps): JSX.Element {
  return (
    <Box id={props.id}>
      <Title>
        <Highlight>About</Highlight> Us
      </Title>

      <Typography paragraph>
        Integrity Well Drilling Services is a brand-new well drilling company
        that is committed to providing high-quality services to residential,
        commercial, and agricultural clients. Our team of experienced
        professionals is dedicated to delivering exceptional results and
        building lasting relationships with our clients.
      </Typography>

      <Typography paragraph>
        At Integrity Well Drilling Services, we understand the importance of
        having access to clean and reliable water, and we are equipped with
        the latest equipment and technology to ensure that the wells we drill
        are of the highest quality. We take pride in our ability to provide
        personalized services that are tailored to meet the specific needs of
        each client, and we work closely with them to ensure that their
        projects are completed on time and within budget.
      </Typography>

      <Typography paragraph>
        Although we are a new company, we bring a wealth of experience to the
        table, and we are committed to providing top-notch services that are
        both reliable and affordable. We offer a wide range of services,
        including well drilling, well pump installation, well inspections, and
        more. We are equipped to handle projects of all sizes and
        complexities, and we approach each job with the same level of
        dedication and professionalism.
      </Typography>

      <Typography paragraph>
        At Integrity Well Drilling Services, customer satisfaction is our top
        priority. We believe in delivering exceptional services that exceed
        our clients' expectations, and we go above and beyond to ensure that
        each client is satisfied with the results. We are committed to
        building lasting relationships with our clients and becoming their
        go-to provider for all their well drilling needs.
      </Typography>

      <Typography paragraph>
        Although we are a new company, we are fully licensed and insured,
        providing our clients with peace of mind knowing that their projects
        are in good hands. We are committed to safety and adhere to all
        industry standards and regulations.
      </Typography>

      <Typography paragraph>
        If you're in need of well drilling services, look no further than
        Integrity Well Drilling Services. We are a new company that is
        dedicated to delivering exceptional results, and we are committed to
        providing top-notch services that are both reliable and affordable.
        Contact us today to learn more about our services and how we can help
        you with your next project.
      </Typography>
    </Box>
  );
}