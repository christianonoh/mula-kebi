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