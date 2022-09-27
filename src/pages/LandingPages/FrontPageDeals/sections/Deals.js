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
import MKPagination from "components/MKPagination";

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

function Deals({fpdeals}) {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "info",
    label: "from / night",
  };

  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container spacing={2}>

            {fpdeals.map((deal) => {
                return (
                  <Grid item xs={12} md={4} lg={3} key={deal.id}>
                    <MKBox mt={5}>
                    <DealCard
                      image="https://picsum.photos/200"
                      title={deal.title}
                      description={deal.description}
                      action={{
                        type: "internal",
                        route: "/somewhere",
                        color: "info",
                        label: "See Deal"
                      }}
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

export default Deals;
