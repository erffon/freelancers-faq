import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

export const FOOTER_DATA = {
  english: {
    texts: {
      introduction:
        "<strong>Freelancers FAQ</strong> project is developed to help Persian digital nomad community to find clients, deliver better services and make more money. we want to do it by sharing knowledge and experience of successful people, starters and those who are in the middle of their professional road.",
      social: [
        { icon: FaLinkedin, link: "" },
        { icon: FaGithub, link: "" },
        { icon: FaTelegram, link: "" },
      ],
    },
    information: {
      title: "Information",
      items: [
        { title: "About Us", link: "" },
        { title: "Contribute", link: "" },
        { title: "Feedback Form", link: "" },
      ],
    },
    categories: {
      title: "Categories",
      items: [
        { title: "General", link: "" },
        { title: "Design", link: "" },
        { title: "Development", link: "" },
      ],
    },
  },
};
