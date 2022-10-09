// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import IconButton from '@mui/material/IconButton';

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";




function DealContent({dealcontent}) {

  // console.log(dealcontent)
  if (!dealcontent) return null;

  return (
    <MKBox component="section" py={{ xs: 6, sm: 10 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
         <MKBox
            width="100%"
            component="img"
            sx={{
              maxWidth: { xs: 350, md: 500 },
            }}
            alt="The house from the offer."
            src={dealcontent.img}
          />

          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={9} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">{dealcontent.name}</MKTypography>
                <IconButton aria-label="like_deal" href="#">
                  <Icon sx={{ fontWeight: "bold" }}>favorite_border</Icon>
                </IconButton>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Upvotes
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" color="text">
                    Submitted by {dealcontent.deal_creator.name}
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                {dealcontent.description} <br />
                <MKTypography
                  component="a"
                  href={dealcontent.url}
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  See Details<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DealContent;
