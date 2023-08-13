import ROUTES from "@/constants/routes";

export const HEADER_DATA = {
  english: {
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
  persian: {},
};
