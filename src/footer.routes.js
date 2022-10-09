// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import AboutUs from "pages/Company/AboutUs";

import ContactUs from "layouts/pages/support/contact-us";
import Faq from "layouts/pages/support/faq";
import Privacy from "layouts/pages/support/privacy";

import AllDeals from "pages/Deals/AllDeals";
import DealsByCreditCard from "pages/Deals/DealsByCreditCard";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import logoKlazzy from "assets/images/logo-klazzy-solid.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "klazzy",
    image: logoKlazzy,
    route: "/",
  },
  socials: [

  ],
  menus: [
    {
      name: "company",
      items: [
        {   
          name: "about",
          route: "/about",
          component: <AboutUs />,
        },
        {
          name: "privacy",
          route: "/privacy",
          component: <Privacy />,
        },
        {
          name: "contact us",
          route: "/contact",
          component: <ContactUs />,
        },
        
      ],
    },
    {
      name: "Browse",
      items: [
        {
          name: "By Deal",
          route: "/deals/all",
          component: <AllDeals />,
        },
        {
          name: "By Credit Card",
          route: "/deals/creditcard",
          component: <DealsByCreditCard />,
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright &copy; {date} {" "}
      <MKTypography
        component="a"
        href="https://www.klazzy.net"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Klazzy
      </MKTypography>

    </MKTypography>
  ),
};
