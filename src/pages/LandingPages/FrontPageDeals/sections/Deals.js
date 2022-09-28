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
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DealsLeftSide from "pages/LandingPages/FrontPageDeals/sections/DealsLeftSide";
// import DealsRightSide from "pages/LandingPages/FrontPageDeals/sections/DealsRightSide";

function Articles({fpdeals}) {

  return (
    <MKBox
      component="section"
      variant="gradient"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}

    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 2 }}>
            <MKTypography variant="h3" >
              精選文章
            </MKTypography>
            <MKTypography variant="body2" opacity={0.8}>
              查看所有
            </MKTypography>
          </Grid>
        </Grid>

        <DealsLeftSide fpdeals={fpdeals}/>

      </Container>
    </MKBox>
  );
}

export default Articles;
