import { QuestionsLink, SidebarLink, TagsLink } from "@/types";
export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];
export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const questionsLink: QuestionsLink[] = [
  {
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
    id: 1001,
  },
  {
    title: "How can an airconditioning machine exist?",
    id: 1002,
  },
  {
    title: "Interrogated every time crossing UK Border as citizen",
    id: 1003,
  },
  {
    title: "Low digit addition generator",
    id: 1004,
  },
  {
    title: "What is an example of 3 numbers that do not make up a vector?",
    id: 1005,
  },
];

export const tagsLink: TagsLink[] = [
  {
    title: "JAVASCRIPT",
    id: 1001,
    tagCount: 9874,
  },
  {
    title: "NEXT.JS",
    id: 1002,
    tagCount: 1547,
  },
  {
    title: "REACT.JS",
    id: 1003,
    tagCount: 45712,
  },
  {
    title: "NODE.JS",
    id: 1004,
    tagCount: 9874,
  },
  {
    title: "PYTHON",
    id: 1005,
    tagCount: 4412,
  },
  {
    title: "MICROSOFT AZURE?",
    id: 1006,
    tagCount: 1014,
  },
  {
    title: "POSTGRESQL",
    id: 1007,
    tagCount: 2235,
  },
  {
    title: "MACHINE LEARNING",
    id: 1008,
    tagCount: 7842,
  },
];
