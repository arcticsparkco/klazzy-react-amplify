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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import SimpleBookingCard from "examples/Cards/BookingCards/SimpleBookingCard";

import DealCard from "pages/LandingPages/FrontPageDeals/components/DealCard";

// Images
import product1 from "assets/images/products/product-1-min.jpg";
import product2 from "assets/images/products/product-2-min.jpg";
import product3 from "assets/images/products/product-3-min.jpg";
import product4 from "assets/images/products/product-5-min.jpg";
import product5 from "assets/images/products/product-6-min.jpg";
import product6 from "assets/images/products/product-7-min.jpg";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";



function Articles({fpdeals}) {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "info",
    label: "from / night",
  };

  return (
    <MKBox
      component="section"
      variant="gradient"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
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
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              精選文章
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              查看所有
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>

            {fpdeals.map((deal) => {
                return (

                  <Grid item xs={12} lg={6}>
                    <MKBox mb={1}>
                      <HorizontalTeamCard
                        image={team1}
                        name={deal.title}
                        position={{ color: "info", label: "Hot Deal" }}
                        description={deal.description}
                      />
                    </MKBox>
                  </Grid>
                );
            })}

        </Grid>
      </Container>
    </MKBox>
  );
}

export default Articles;
