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
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

import DealCard from "pages/Deals/components/DealCard";


function DealList({deallist}) {

  return (
    <>
        <Grid container spacing={2}>

            {deallist.map((deal) => {
                return (
                  <Grid item xs={12} md={4} lg={3} key={deal.id}>
                    <MKBox mt={5}>
                    <DealCard
                      id={deal.id}
                      slug={deal.slug}
                      image={deal.img}
                      url={deal.url}
                      title={deal.name}
                      owner={deal.deal_creator.name}
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
    </>

  );
}

export default DealList;
