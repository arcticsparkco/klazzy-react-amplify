// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

import DealCard from "pages/Deals/components/DealCard";

function DealsLeftSide({fpdeals}) {
  console.log(fpdeals)

  return (
    <>
      <Grid container spacing={2}>

        {fpdeals.map((deal) => {
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

export default DealsLeftSide;
