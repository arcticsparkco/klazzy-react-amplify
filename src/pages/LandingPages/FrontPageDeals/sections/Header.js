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

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/css";
import "swiper/css/navigation";

// Pricing page components
import SliderHeader from "pages/LandingPages/FrontPageDeals/components/Header";

// Images
import bg1 from "assets/images/bg2.jpg";
import bg2 from "assets/images/bg.jpg";
import bg3 from "assets/images/dg1.jpg";

function Header() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper 
      autoplay={{ delay: 5000 }}
      speed={800}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>
        <SliderHeader
          image="https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          label="Promotions"
          title="Dining Offer - Up to 5% RewardCash Rebate"
          description="Savour the good times together"
          cards={[
            {
              variant: "gradient",
              color: "info",
              icon: "shuffle",
              title: "Netflix's 'Shuffle Play' feature",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "info",
              icon: "redeem",
              title: "Landbot closes $8M Series",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "info",
              icon: "bookmarks",
              title: "Brave web browser",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image="https://ec4ulimited.com/wp-content/uploads/2018/01/taobao.jpg"
          label="Taobao"
          title="Taobao Shipping Comparison for 13 Major Shipping Providers"
          description="As more of our turn to Taobao for shopping, choosing a good shipping provider will save you headache and costs. Find the best one for your situation。"
          cards={[
            {
              variant: "contained",
              color: "primary",
              icon: "shuffle_on",
              title: "Netflix's 'Shuffle Play' feature",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "gradient",
              color: "primary",
              icon: "beenhere",
              title: "Landbot closes $8M Series",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "primary",
              icon: "ballot",
              title: "Brave web browser",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          label="Lazy"
          title="Credit Card Strategy Guide"
          description="You’re spending time to save money when you should be spending money to save time."
          cards={[
            {
              variant: "contained",
              color: "error",
              icon: "tune",
              title: "Netflix's 'Shuffle Play' feature",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "error",
              icon: "settings_suggest",
              title: "Landbot closes $8M Series",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "gradient",
              color: "error",
              icon: "compare",
              title: "Brave web browser",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
          ]}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
