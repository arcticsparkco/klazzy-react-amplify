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
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKPagination from "components/MKPagination";

// Material Kit 2 PRO React components
import SimpleBookingCard from "examples/Cards/BookingCards/SimpleBookingCard";

// Images
import product1 from "assets/images/products/product-1-min.jpg";
import product2 from "assets/images/products/product-2-min.jpg";
import product3 from "assets/images/products/product-3-min.jpg";
import product4 from "assets/images/products/product-5-min.jpg";
import product5 from "assets/images/products/product-6-min.jpg";
import product6 from "assets/images/products/product-7-min.jpg";

function DealsRightSide() {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "info",
    label: "from / night",
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <MKBox mt={3}>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6947207965833207"
     crossorigin="anonymous"></script>
            </MKBox>
          </Grid>
        </Grid>

      </Container>
    </MKBox>
  );
}

export default DealsRightSide;
