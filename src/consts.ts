import type { Site, Metadata } from "@types";

export const SITE: Site = {
  NAME: "Vincent Cayadi",
  EMAIL: "202483j@student.hci.edu.sg",
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

export const defaultMeta = {
  title: "Vincent Cayadi",
  description: "Vincent Cayadi",
  ogImage: {
    src: "/images/banner.webp",
    alt: "Vincent Cayadi",
  },
  wesbite: "https://senrobo.github.io",
};
