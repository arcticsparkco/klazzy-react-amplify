/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';


import Avatar from '@mui/material/Avatar';

import { red } from '@mui/material/colors';


// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function DealCard({ image, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",

    "& .material-icons, .material-icons-round,": {
      transform: "translateX(2px)",
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: "translateX(6px)",
      },
  };

  return (
    <Card 
      sx={{ maxWidth: 300 }}
    >

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] , maxWidth:20, maxHeight:20}} aria-label="recipe" >
            S
          </Avatar>
        }

        title="chief editior"
        subheader="September 14, 2022"
        titleTypographyProps={{variant:'caption' }}
        subheaderTypographyProps={{variant:'caption' }}
      />

      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />


      <CardContent>
        <MKTypography display="inline" variant="h6" textTransform="capitalize">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="caption" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Icon sx={{ fontWeight: "bold" }}>thumb_up</Icon>
        </IconButton>
        <IconButton aria-label="share">
          <Icon sx={{ fontWeight: "bold" }}>comment</Icon>
        </IconButton>
        <IconButton aria-label="share">
          <Icon sx={{ fontWeight: "bold" }}>share</Icon>
        </IconButton>

      </CardActions>

      {/*
        <MKBox mt={1}>
        {action.type === "external" ? (
          <MKTypography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={action.color ? action.color : "dark"}
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        ) : (
          <MKTypography
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={action.color ? action.color : "dark"}
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        )}
        </MKBox>

      */}

    </Card>
  );
}

// Typechecking props for the DealCard
DealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default DealCard;
