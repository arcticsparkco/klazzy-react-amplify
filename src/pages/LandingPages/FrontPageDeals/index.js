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
// import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


import Header from "pages/LandingPages/FrontPageDeals/sections/Header";

// FrontPageDeals page sections
// import Search from "pages/LandingPages/FrontPageDeals/sections/Search";
import Deals from "pages/LandingPages/FrontPageDeals/sections/Deals";
import Articles from "pages/LandingPages/FrontPageDeals/sections/Articles";
// import Testimonials from "pages/LandingPages/FrontPageDeals/sections/Testimonials";
// import Faq from "pages/LandingPages/FrontPageDeals/sections/Faq";
// import Contact from "pages/LandingPages/FrontPageDeals/sections/Contact";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const blogpostsURL = "http://0.0.0.0:5000/api/v1/blogposts/";
const dealsURL = "http://0.0.0.0:5000/api/v1/deals/";

function FrontPageDeals() {

  const [blogposts, setBlogposts] = useState(null);

  useEffect(() => {
    axios.get(blogpostsURL).then((response) => {
      setBlogposts(response.data);
    });
  }, []);

  const [fpdeals, setFpdeals] = useState(null);

  useEffect(() => {
    axios.get(dealsURL).then((response) => {
      setFpdeals(response.data);
    });
  }, []);

  // =====================
  // =====================
  // set some defaults

  if (!blogposts) setBlogposts([
    {
        "contents": "Whether you like cooking or not, an Instant Pot is a kitchen tool that you need to add to your kitchen. I intensely dislike cooking, but my Instant Pot makes cooking delicious meals super easy, fast, and, dare I say it, fun! ",
        "created_at": null,
        "id": 1,
        "modified_at": null,
        "owner_id": 1,
        "title": "Why the Instant Pot is the #1 Cooking Tool You Need Right Now"
    }])

  if (!fpdeals) setFpdeals([
    {
        "created_at": null,
        "description": "check the details",
        "id": 1,
        "modified_at": null,
        "name": "free lift pass",
        "owner_id": 1,
        "valid_until": "2022-12-12T00:00:00"
    }])

  // =====================
  // =====================

  if (!blogposts) return null;
  if (!fpdeals) return null;
  
  const bannerLine = "購物攻略"

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
              {bannerLine}
            </MKTypography>

          </Grid>
        </Container>
      </MKBox>

      <Deals fpdeals={fpdeals}/>
      <Articles blogposts={blogposts}/>
      

    </>
  );
}

export default FrontPageDeals;
