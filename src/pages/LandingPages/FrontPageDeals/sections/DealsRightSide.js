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
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKPagination from "components/MKPagination";

// Material Kit 2 PRO React components
// import SimpleBookingCard from "examples/Cards/BookingCards/SimpleBookingCard";


function DealsRightSide() {

  // const actionProps = {
  //   type: "internal",
  //   route: "/pages/landing-pages/rental",
  //   color: "info",
  //   label: "from / night",
  // };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <MKBox mt={3}>

            </MKBox>
          </Grid>
        </Grid>

      </Container>
    </MKBox>
  );
}

export default DealsRightSide;
