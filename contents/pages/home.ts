import ROUTES from "@/constants/routes";
import { BiLogoTelegram } from "react-icons/bi";

export const HOME_DATA = {
  english: {
    seo: {
      pageTitle: "Home",
      pageDesc:
        "Home page of Freelancers FAQ page. this is where you can see more details about this website and most frequently asked questions of persian freelancers community.",
    },
    section1: {
      title: {
        subTitle: "Everything",
        midTitle: "Freelancers",
        postTitle: "Need To Know",
      },
      caption:
        "Frequently Asked Questions in the Persian Freelancers Community: From Starting Your Journey to Finding Clients and Earning Money as a Digital Nomad",
      button: {
        title: "See More",
        link: ROUTES.QUESTIONS,
      },
    },
    section2: {
      cta_box: {
        images: [
          "/assets/images/homepage/memoj1.jpg",
          "/assets/images/homepage/memoj2.jpg",
          "/assets/images/homepage/memoj3.jpg",
        ],
        texts: {
          title: "Still have questions?",
          caption:
            "Can’t find the answer you’re looking for? join our friendly community on Telegram",
          icon: BiLogoTelegram,
        },
        ctaButton: {
          title: "Join Community",
          link: ROUTES.COMMUNITY,
        },
      },
      who_we_are: {
        text: {
          title: "Who we are?",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur convallis diam, eget aliquam metus porttitor sed. Vestibulum placerat massa nec risus interdum, at tincidunt libero condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum consectetur, nunc eu aliquet maximus, tortor sem dapibus mi, ut rhoncus nisi dui sit amet tortor. Pellentesque sed mauris rhoncus, vulputate nibh facilisis, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare sed sem at gravida. Aliquam vestibulum purus eget risus dapibus, ac suscipit justo aliquam. Phasellus sed consectetur sapien. Cras ultrices felis tortor, at porta ante fringilla ut. Phasellus in finibus justo. Curabitur pulvinar tellus at metus hendrerit, fermentum blandit sapien aliquam. Nulla dignissim hendrerit dui ac convallis.",
        },
        image: {
          src: "/assets/images/homepage/team-banner.jpg",
        },
      },
    },
  },
  persian: {},
};
