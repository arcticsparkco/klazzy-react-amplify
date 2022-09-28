/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";



// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";


import ReactGA from "react-ga4";
import {Helmet} from "react-helmet";


// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// Material Kit 2 PRO React themes
import theme from "assets/theme";
import FrontPageDeals from "pages/LandingPages/FrontPageDeals";



// Material Kit 2 PRO React routes
import routes from "routes";
import footerRoutes from "footer.routes";

ReactGA.initialize("G-Y7ME825BDG");

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  ReactGA.send("pageview");

  return (

    <>
      <Helmet>
        <title>klazzy shopper</title>
        <meta name="description" content="shop smart. shop klazzy" />
        <link rel="canonical" href="https://www.klazzy.net" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <CssBaseline />
  
        <DefaultNavbar
          routes={routes}
        />
  
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<FrontPageDeals />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter 
            content={footerRoutes} 
          />
        </MKBox>
      </ThemeProvider>
    </>
  );
}
