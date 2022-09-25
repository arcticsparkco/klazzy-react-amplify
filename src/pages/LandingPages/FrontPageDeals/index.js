/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import axios from "axios";


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";



// FrontPageDeals page sections
import Search from "pages/LandingPages/FrontPageDeals/sections/Search";
import Deals from "pages/LandingPages/FrontPageDeals/sections/Deals";
import DealsRightSide from "pages/LandingPages/FrontPageDeals/sections/DealsRightSide";
import Testimonials from "pages/LandingPages/FrontPageDeals/sections/Testimonials";
import Faq from "pages/LandingPages/FrontPageDeals/sections/Faq";
import Contact from "pages/LandingPages/FrontPageDeals/sections/Contact";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-rental.jpeg";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function FrontPageDeals() {

    const [post, setPost] = useState(null);
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);

    const [fpdeals, setFpdeals] = useState([
        {
          id: 1,
          title: "This is first list",
          description: "That's pretty impressive."
        },
        {
          id: 2,
          title: "This is second list",
          description: "That's pretty impressive."
        },
        {
          id: 3,
          title: "This is third list",
          description: "That's pretty impressive."
        },
        {
          id: 4,
          title: "This is first list",
          description: "That's pretty impressive."
        },
        {
          id: 5,
          title: "This is second list",
          description: "That's pretty impressive."
        },
        {
          id: 6,
          title: "This is third list",
          description: "That's pretty impressive."
        },
    ]);


  const products = [
        {id: 1, name: "Shoes", description: "Running Shoes" },
        {id: 2, name: "MacBook", description: "Apple MacBook" },
    ];
  if (!fpdeals) return null;
  return (
    <>
      <MKBox
        minHeight="25vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.0),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h3"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {post.title}
            </MKTypography>

          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "hidden",
        }}
      >

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} lg={10}>
            <Deals fpdeals={fpdeals}/>
          </Grid>
          <Grid item xs={12} lg={2}>
            <DealsRightSide />

          </Grid>
        </Grid>

      </Card>



      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 0,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "hidden",
        }}
      >
        
        {/*<Search />*/}

        {/*<Testimonials />*/}
        <Faq />
      </Card>

    </>
  );
}

export default FrontPageDeals;
