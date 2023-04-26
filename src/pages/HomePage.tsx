import React from "react";

import DarkModeContext from "../components/context/DarkMode";

import { Tab, Navbar } from "../components/Navbar";
import Header from '../components/home/Header';
import Services from "../components/home/Practices";
import About from "../components/home/About";
import Footer from "../components/Footer";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import useScrollTrigger from '@mui/material/useScrollTrigger';


type HomePageProps = {
    tabs: Tab[];
};

export default function HomePage(props: HomePageProps): JSX.Element {
    const darkModeContext = React.useContext(DarkModeContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        darkModeContext?.setDarkMode(event.target.checked);
    };

    const thresholdTrigger: boolean = useScrollTrigger({ 
        threshold: 80,
        disableHysteresis: true,
    });

    return (
        <>
            <CssBaseline />
            
            <Navbar tabs={props.tabs} transparent={!thresholdTrigger} />
    
            <Header id="header"/>

            <Container maxWidth="lg">
                <Services id="practices" />

                <About id="about" />
    
                {/* <FormControlLabel control={<Switch checked={darkModeContext?.darkMode} onChange={handleChange} />} label="Dark Mode" /> */}
            </Container>

            <Footer />
        </>
    );
}