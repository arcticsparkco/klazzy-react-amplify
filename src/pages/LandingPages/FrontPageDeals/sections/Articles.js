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

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// import team1 from "assets/images/team-5.jpg";


function Articles({blogposts}) {

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

            {blogposts.map((blogpost) => {
                return (

                  <Grid item xs={12} lg={6} key={blogpost.id}> 
                    <MKBox mb={1}>
                      <HorizontalTeamCard
                        image="https://picsum.photos/400"
                        name={blogpost.title}
                        position={{ color: "info", label: "Hot Deal" }}
                        description={blogpost.contents}
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
