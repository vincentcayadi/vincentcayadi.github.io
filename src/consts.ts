import type { Site, Metadata } from "@types";

export const SITE: Site = {
  NAME: "Vincent Cayadi",
  EMAIL: "202483j@student.hci.edu.sg",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Hello World welcome to my dungeon of madness",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Yap dump",
};

export const defaultMeta = {
  title: "Vincent Cayadi",
  description: "Vincent Cayadi",
  ogImage: {
    src: "/og/home.png",
    alt: "Vincent Cayadi",
  },
  wesbite: "https://vincentcayadi.github.io",
};
