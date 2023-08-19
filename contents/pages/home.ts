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
    },
  },
  persian: {},
};
