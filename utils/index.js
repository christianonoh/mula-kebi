import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) => {
    return compareDesc(parseISO(b.publishedAt), parseISO(a.publishedAt));
  });
}