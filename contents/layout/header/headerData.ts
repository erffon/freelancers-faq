import ROUTES from "@/constants/routes";

export const HEADER_DATA = {
  english: {
    logoImage: "/assets/images/Iran.svg",
    headerLinks: [
      { title: "Home", link: ROUTES.HOME },
      { title: "Questions", link: ROUTES.QUESTIONS },
      { title: "About", link: ROUTES.ABOUT },
      { title: "Add New", link: ROUTES.ADD_NEW_QUESTION },
    ],
    ctaButton: {
      title: "Join Community",
      link: ROUTES.COMMUNITY,
    },
  },
  persian: {
    logoImage: "/assets/images/Iran.svg",
    headerLinks: [
      { title: "خانه", link: ROUTES.HOME },
      { title: "سوالات", link: ROUTES.QUESTIONS },
      { title: "درباره ما", link: ROUTES.ABOUT },
      { title: "افزودن سوال", link: ROUTES.ADD_NEW_QUESTION },
    ],
    ctaButton: {
      title: "پیوستن به کامیونیتی",
      link: ROUTES.COMMUNITY,
    },
  },
};
