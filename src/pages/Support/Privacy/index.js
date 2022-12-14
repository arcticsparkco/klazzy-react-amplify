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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Privacy() {
  const companyName = "Klazzy"
  const contactEmail = "info@klazzy.net"
  const companyUrl = "https://www.klazzy.net"
  return (
    <>
      <MKBox component="section" pt={10} pb={10}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="dark"
                  borderRadius="lg"
                  coloredShadow="dark"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    Privacy & Policy
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Last modified: October 1 2022
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={6}>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Introduction
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    At {companyName}, accessible{" "}
                    <MKTypography
                      variant="body2"
                      color="dark"
                      component="a"
                      href="https://www.creative-tim.com"
                      target="_blank"
                      rel="noreferrer"
                      sx={{ "&:hover": { color: ({ palette: { info } }) => info.main } }}
                    >
                      here
                    </MKTypography>
                    , one of our main priorities is the privacy of our visitors. This Privacy Policy
                    document contains types of information that is collected and recorded by Website
                    Name and how we use it.
                    <br />
                    <br />
                    If you have additional questions or require more information about our Privacy
                    Policy, do not hesitate to contact us through email at {contactEmail}
                    <br />
                    <br />
                    This privacy policy applies only to our online activities and is valid for
                    visitors to our website with regards to the information that they shared and/or
                    collect in{" "}
                    <MKTypography
                      variant="body2"
                      color="dark"
                      component="a"
                      href={companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ "&:hover": { color: ({ palette: { info } }) => info.main } }}
                    >
                      {companyName}
                    </MKTypography>
                    . This policy is not applicable to any information collected offline or via
                    channels other than this website.
                  </MKTypography>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Managing Your Information
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Unless otherwise stated, {companyName} and/or its licensors own the intellectual
                    property rights for all material on {companyName}. All intellectual property
                    rights are reserved. You may access this from {companyName} for your own personal
                    use subjected to restrictions set in these terms and conditions.
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    You must not:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Republish material from {companyName}
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Sell, rent or sub-license material from {companyName}
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Reproduce, duplicate or copy material from {companyName}
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text" fontWeight="regular">
                        Redistribute content from {companyName}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                  <MKTypography variant="body2" color="text">
                    This Agreement shall begin on the date hereof. Our Terms and Conditions were
                    created with the help of the{" "}
                    <MKTypography
                      variant="body2"
                      color="text"
                      component="a"
                      href={companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms And Conditions Generator
                    </MKTypography>{" "}
                    and the{" "}
                    <MKTypography
                      variant="body2"
                      color="dark"
                      component="a"
                      href={companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ "&:hover": { color: ({ palette: { info } }) => info.main } }}
                    >
                      Privacy Policy Generator
                    </MKTypography>
                    .

                  </MKTypography>
                  <br />
                  <MKTypography variant="body2" color="text">
                    Parts of this website offer an opportunity for users to post and exchange
                    opinions and information in certain areas of the website. {companyName} does not
                    filter, edit, publish or review Comments prior to their presence on the website.
                    Comments do not reflect the views and opinions of {companyName}, its agents and/or
                    affiliates. Comments reflect the views and opinions of the person who post their
                    views and opinions. To the extent permitted by applicable laws, {companyName}
                    shall not be liable for the Comments or for any liability, damages or expenses
                    caused and/or suffered as a result of any use of and/or posting of and/or
                    appearance of the Comments on this website.
                  </MKTypography>
                  <br />
                  <MKTypography variant="body2" color="text">
                    {companyName} reserves the right to monitor all Comments and to remove any
                    Comments which can be considered inappropriate, offensive or causes breach of
                    these Terms and Conditions.
                  </MKTypography>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Security
                  </MKTypography>
                  <MKTypography variant="body2" color="text" fontWeight="regular">
                    We shall not be hold responsible for any content that appears on your Website.
                    You agree to protect and defend us against all claims that is rising on your
                    Website. No link(s) should appear on any Website that may be interpreted as
                    libelous, obscene or criminal, or which infringes, otherwise violates, or
                    advocates the infringement or other violation of, any third party rights.
                  </MKTypography>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

    </>
  );
}

export default Privacy;
