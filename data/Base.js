// TODO: GLOBAL CONST
export const BASE = {
  name: "bidle",
  domain: "www.bidle.com",
  fullname: "blog idle",
  creator: "Tristin Tran",
  releaseYear: "2021",
};

export const META = {
  title: "Bidle -- A personal blog",
  url: "https://" + BASE.domain,
  description:
    "Bidle is my blog, sharing my hobbies, works and more. This website build by Nextjs and Contentful for learning Nextjs",
  img: "/images/thumbnail.jpg",
};

export const CATEGORIES = [
  {
    name: "design",
    link: "/categories/design",
    icon: "pen.png",
  },
  {
    name: "life style",
    link: "/categories/life-style",
    icon: "lifestyle.png",
  },
  {
    name: "GYM",
    link: "/categories/GYM",
    icon: "fitness.png",
  },
  {
    name: "coding",
    link: "/categories/coding",
    icon: "code.png",
  },
  {
    name: "retro game",
    link: "/categories/retro-game",
    icon: "retro.png",
  },
];

export const SOCIALS = [
  {
    name: "github",
    link: "https://github.com/ts4blader",
    icon: "github.png",
  },
  {
    name: "codepen",
    link: "https://codepen.io/ts4blader",
    icon: "codepen.png",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/minhquoc.tran.9828/",
    icon: "facebook.png",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/ts4blader/",
    icon: "insta.png",
  },
];

export const SPONSORS = [
  {
    name: "westeros",
    image: "westeros.jpg",
    link: "/",
  },
  {
    name: "king's landing",
    image: "kingslanding.jpg",
    link: "/",
  },
  {
    name: "winterfell",
    image: "winterfell.jpg",
    link: "/",
  },
];
