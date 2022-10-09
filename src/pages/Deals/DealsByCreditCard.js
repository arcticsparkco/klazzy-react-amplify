import { useState, useEffect } from "react";
import axios from "axios";


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";


// Coworking page sections
// import Information from "pages/Deals/sections/Information";
// import Testimonials from "pages/Deals/sections/Testimonials";
// import AboutUs from "pages/Deals/sections/AboutUs";
// import Places from "pages/Deals/sections/Places";
import DealList from "pages/Deals/sections/DealList";


import { config } from 'environments/Constants'
const dealsURL = config.url.API_URL + "deals/";

function DealsByCreditCard() {

  const deallist = [
      {
          "categories": {},
          "created_at": null,
          "deal_creator": {
              "email": "my@gmakl.com",
              "name": "sa"
          },
          "description": "check the details",
          "id": 1,
          "img": "",
          "modified_at": null,
          "name": "free lift pass",
          "tags": {},
          "url": "",
          "valid_until": "2022-12-12T00:00:00"
      }
    ];
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/coworking",
    color: "dark",
    label: "find more",
  };


  const [allDeals, setAllDeals] = useState(null);

  useEffect(() => {
    axios.get(dealsURL).then((response) => {
      setAllDeals(response.data);
    });
  }, []);



  return (
    <>
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
          <Grid
            container
            item
            flexDirection="column"
            alignItems="center"
            xs={12}
            lg={6}
            sx={{ textAlign: "center", mx: "auto" }}
          >

            <MKTypography variant="h2" mb={1}>
              Never Shop without a Deal{" "}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              If you can&apos;t decide, the answer is no. If two equally difficult paths, choose the
              one more painful in the short term (pain avoidance is creating an illusion of equality).
            </MKTypography>
            <MKBadge
              variant="contained"
              color="error"
              badgeContent="Hot"
              container
              circular
              sx={{ mt: 1 }}
            />

          </Grid>
          </Container>
          </MKBox>


          <Container>

        

          {allDeals ? <DealList deallist={allDeals}/> : null }

        </Container>
      

        

    </>
  );
}

export default DealsByCreditCard;
