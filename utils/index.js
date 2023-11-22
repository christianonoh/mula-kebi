import { compareDesc, parseISO, format } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) => {
    return compareDesc(parseISO(b.publishedAt), parseISO(a.publishedAt));
  });
}

export const formatDate = (date, dateFormat='MMMM dd, yyyy') => {
  return format(parseISO(date), dateFormat);
}

export const techStack = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
]
