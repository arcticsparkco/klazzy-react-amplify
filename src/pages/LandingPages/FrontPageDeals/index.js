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


import Header from "pages/LandingPages/FrontPageDeals/sections/Header";

// FrontPageDeals page sections
import Search from "pages/LandingPages/FrontPageDeals/sections/Search";
import Deals from "pages/LandingPages/FrontPageDeals/sections/Deals";
import Articles from "pages/LandingPages/FrontPageDeals/sections/Articles";
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
          title: "Dog Deal",
          description: "Pooch lovers rejoice!",
          num_upvote: 5
        },
        {
          id: 2,
          title: "Shoe Deal",
          description: "Pretty shoes for the win",
          num_upvote: 2
        },
        {
          id: 3,
          title: "AWS Deal",
          description: "50% off any new sign ups",
          num_upvote: 15
        },
        {
          id: 4,
          title: "Free games at epic",
          description: "That's pretty impressive.",
          num_upvote: 100
        },
        {
          id: 5,
          title: "Get your PS5 now",
          description: "Have you gotten yours?",
          num_upvote: 12
        },
        {
          id: 6,
          title: "Macbook 10pct off",
          description: "That's pretty impressive.",
          num_upvote: 5
        },
    ]);


  const products = [
        {id: 1, name: "Shoes", description: "Running Shoes" },
        {id: 2, name: "MacBook", description: "Apple MacBook" },
    ];
  if (!post) return null;
  return (
    <>
      <Header />
      <MKBox
        minHeight="15vh"

        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.warning.main, 0.99),
              rgba(gradients.warning.state, 0.5)
            )}, url()`,
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

      <MKBox 
        mt={5} 
        pb={5}
        
      >
        <Grid container spacing={3} >
          <Grid item xs={6} lg={2}>
            <MKBox ml={3} mt={2}>
              <MKTypography variant="h4" component="p" color="text">
                精選優惠
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox ml={3} mt={2}>
              <MKTypography variant="h4" component="p" color="text">
                查看所有
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={10}>
            <Deals fpdeals={fpdeals}/>
          </Grid>
          <Grid item xs={12} lg={2}>
            <DealsRightSide />

          </Grid>
        </Grid>
      </MKBox>

      <Articles fpdeals={fpdeals}/>






    </>
  );
}

export default FrontPageDeals;
