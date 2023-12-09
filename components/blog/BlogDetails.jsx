import { formatDate } from "@/utils"
import Link from "next/link"
import { slug as slugger } from 'github-slugger';
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug }) => {
  return (
    <div className="flex flex-wrap justify-around px-5 py-2 mx-5 mt-8 text-lg rounded-lg sm:text-xl bg-accent dark:bg-accentDark/90 text-light dark:text-dark md:mx-10">
      <time className='m-3'>{formatDate(blog.publishedAt)}</time>
      <div className='m-3'><ViewCounter slug={slug} /></div>
      <div className='m-3'>{blog.readingTime.text}</div>
      <Link href={`/categories/${slugger(blog.tags[0])}`} className='m-3'>#{blog.tags[0]}</Link>
    </div>
  )
}

export default BlogDetails
