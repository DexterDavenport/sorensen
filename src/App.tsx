import React from "react";

import DarkModeContext from "./components/context/DarkMode";

import { Tab } from "./components/Navbar";
import HomePage from "./pages/HomePage";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

import { BrowserRouter as Router, Routes, Route, Location, useLocation } from "react-router-dom";


// https://m2.material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=1b4972
const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#B82201",
      main: "#B82201",
      dark: "#003c5a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#B82201",
      main: "#B82201",
      dark: "#4b3833",
    },
    background: {
      default: "#fff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#77625C",
    },
  },
});

// #086788, #07A0C3, #C5C9A4, #8E6E53, #77625C

type ScrollWrapperProps = {
  children: JSX.Element;
};

// Scroll to top after clicking link.
// Scroll to anchor if one exists.
function ScrollWrapper(props: ScrollWrapperProps): JSX.Element {
  const location: Location = useLocation();

  React.useLayoutEffect((): void => {
    const anchor: string | undefined = location.hash.split('#').pop();
    const target: HTMLElement | null = anchor ? document.getElementById(anchor) : null;

    console.log(anchor, target);

    if (window && target) {
      const scrollTo: number = target.getBoundingClientRect().top + window.pageYOffset;
      document.documentElement.scrollTo({top: scrollTo, behavior: 'smooth' });
    }
    else {
      document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return props.children;
}

const TABS: Tab[] = [
  { title: 'Free Estimate', link: '#header' },
  { title: 'Services', link: '#services' },
  { title: 'About', link: '#about' },
];

export default function App(): JSX.Element {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <ScrollWrapper>
            <Routes>
              <Route index element={<HomePage tabs={TABS} />} />
            </Routes>
          </ScrollWrapper>
        </Router>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}
