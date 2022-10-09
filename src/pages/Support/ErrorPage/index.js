// @mui material components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

function ErrorPage() {
  return (
    <>

      <MKBox component="section" pt={20} pb={12}>
        <Container sx={{ mb: 8 }}>

          <SimpleInfoCard
            icon="grid_view"
            title="404 Error"
            description="I think you got lost in the mall"
            direction="center"
          />

        </Container>
      </MKBox>
    </>
  );
}

export default ErrorPage;
