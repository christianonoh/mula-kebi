import { compareDesc, parseISO, format } from "date-fns";
import { slug as slugger } from "github-slugger";

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


export const getCategories = (allBlogs) => {
  const allCategoriesSet = new Set();

  allBlogs.forEach((post) => {
    // Assuming that the 'tags' property exists in each blog post
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        allCategoriesSet.add(slugger(tag));
      });
    }
  });

  // Convert Set to Array
  const allCategoriesArray = [...allCategoriesSet];

  return allCategoriesArray;
}
