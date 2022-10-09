
import { useParams } from 'react-router';

import { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Author page sections
import DealContent from "pages/DealDetail/sections/DealContent";
// import Posts from "pages/Blogs/Author/sections/Posts";
import Articles from "pages/LandingPages/FrontPageDeals/sections/Articles";

// Images
import bgImage from "assets/images/city-profile.jpg";

import { config } from 'environments/Constants'

function DealDetail() {
  
  const { slug } = useParams();
  // console.log("slug=" + slug)
  
  const dealcontentURL = config.url.API_URL + "deals/slug/" + slug;
  const blogpostsURL = config.url.API_URL + "blogposts/";

  // console.log(dealcontentURL)
  const [dealcontent, setDealcontent] = useState(null);

  useEffect(() => {
    axios.get(dealcontentURL).then((response) => {
      setDealcontent(response.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log(dealcontent)

  const [blogposts, setBlogposts] = useState(null);

  useEffect(() => {
    axios.get(blogpostsURL).then((response) => {
      setBlogposts(response.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <>

      <MKBox bgColor="white">
        <MKBox
          minHeight="10rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.warning.main, 0.8),
                rgba(gradients.warning.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          {dealcontent ? <DealContent dealcontent={dealcontent} /> : null}
          
        </Card>
        {blogposts ? <Articles blogposts={blogposts}/> : null }

      </MKBox>
    </>
  );
}

export default DealDetail;
