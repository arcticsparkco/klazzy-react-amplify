// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import AboutUs from "layouts/pages/company/about-us";

import ContactUs from "layouts/pages/support/contact-us";
import Faq from "layouts/pages/support/faq";
import Privacy from "layouts/pages/support/privacy";



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
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/go_klazzy/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/go_klazzy",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        {   
          name: "about us",
          route: "/pages/company/about-us",
          component: <AboutUs />,
        },
        {
          name: "privacy",
          route: "/pages/support/privacy",
          component: <Privacy />,
        },
        {
          name: "contact us",
          route: "/pages/support/contact-us",
          component: <ContactUs />,
        },
        
      ],
    },
    {
      name: "browse",
      items: [
        {
          name: "By Deal",
          route: "/pages/support/contact-us",
          component: <ContactUs />,
        },
        {
          name: "By Credit Card",
          route: "/pages/support/contact-us",
          component: <ContactUs />,
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
