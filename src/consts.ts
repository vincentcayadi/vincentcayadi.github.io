import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Vincent Cayadi",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  {
    NAME: "github",
    HREF: "https://github.com/markhorn-dev",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  },
];
