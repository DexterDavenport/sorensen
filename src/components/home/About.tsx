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
      Welcome to Sorensen Law & Associates, a transactions and litigation powerhouse located at 3210 N Canyon Road, Suite 201 in Provo, Utah. Our team of outstanding lawyers is tenacious, tough and talented, providing the intellectual firepower, manpower and expertise to prosper, preserve, and protect our clients in transactions, trials, appeals, mediations and arbitrations. We excel at high-stakes, white-knuckle, complex legal matters.
      </Typography>

      <Typography paragraph>
      Our practice is a regional leader in Business Transactions and Contract Law. We are also skilled in corporate, securities, M&A, intellectual property and employment litigation. Our attorneys have not only structured multi-million dollar deals, but also have extensive experience representing private and publicly held companies, private equity firms, financial institutions, consulting firms, investors, and numerous businesses.
      </Typography>

      <Typography paragraph>
      At Sorensen Law & Associates, we offer unsurpassed legal services to our clients. Our practice areas include Arbitration, and Mediation, Corporate and Commercial Litigation, Contracts and Business Agreements, Corporate Law, Employment Law, Finance Law, Securities Law, Financial Institutions, Franchise Law, Distributorship Law, Intellectual Property and IP Litigation, Litigation and Trial Work, Mergers & Acquisitions, and Project Development & Finance.
      </Typography>

      <Typography paragraph>
      Our founder, Asael T. Sorensen, Jr., represents clients in mergers and acquisitions, securities law, corporate finance, formation of business entities, and a variety of contracts. With a wealth of experience, Mr. Sorensen has successfully represented both buyers and sellers in complex mergers, as well as stock and asset purchases and sales in multi-million dollar transactions. He is also experienced in the preparation of securities registration statements, private placement offerings, and compliance matters.
      </Typography>

      <Typography paragraph>
      Mr. Sorensen is a graduate of J. Reuben Clark Law School, Brigham Young University, where he earned his Juris Doctor (JD) in 1982. He also holds a Masters of Business Administration (MBA) from Brigham Young University and a Bachelor of Science in Economics, which he earned cum laude in 1978.
      </Typography>

      <Typography paragraph>
      We invite you to contact us today to learn more about our legal services. You can reach us at 801-687-1521 or sorensenlawassociates@gmail.com. You can also visit our website at sorensenlawfirm.com to learn more about us and our practice.
      </Typography>
    </Box>
  );
}