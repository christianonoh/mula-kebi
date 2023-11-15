import { cx, sortBlogs } from "@/utils"
import BlogLayoutOne from "../blog/BlogLayoutOne"
import BlogLayoutTwo from "../blog/BlogLayoutTwo"
import { allBlogs } from "@/.contentlayer/generated"
import styles from "@/styles"
import BlogLayoutThree from "../blog/BlogLayoutThree"
import Link from "next/link"


const RecentPosts = () => {
  const sortedBlogs = sortBlogs(allBlogs)
  const recentBlogs = sortedBlogs.slice(0, 6);
  
  return (
    <section
      // className={cx(styles.xMargins2x, styles.flexCenter, styles.topMargins, 'flex-col')}
      className='flex flex-col items-center justify-center w-full px-5 mt-16 sm:mt-24 md:mt-32 sm:px-10 md:px-24 sxl:px-32'
    >
      <div className="flex items-center justify-between w-full ">
        <h2 className="text-4xl font-bold capitalize ">
          recent posts
        </h2>
        <Link href='/catergories/all' className="px-4 py-2 capitalize rounded-full hover:text-light text-accent bg-accent/20">
          view all
        </Link>
      </div>
      <div className={cx(styles.topMargins, "grid lg:grid-cols-3 sm:grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-16")}>
        {recentBlogs.map((blog, index) => (
          <article key={index}>
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
        
      </div>
    </section>
  )
}

export default RecentPosts;
