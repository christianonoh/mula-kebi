import { formatDate } from "@/utils"
import Link from "next/link"
import { slug } from 'github-slugger';

const BlogDetails = ({ blog }) => {
  return (
    <div className="flex flex-wrap justify-around px-5 py-2 mx-5 mt-8 text-xl rounded-lg bg-accent text-light md:mx-10">
      <time className='m-3'>{formatDate(blog.publishedAt)}</time>
      <div className='m-3'>{'1200 views'}</div>
      <div className='m-3'>{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className='m-3'>#{blog.tags[0]}</Link>
    </div>
  )
}

export default BlogDetails
