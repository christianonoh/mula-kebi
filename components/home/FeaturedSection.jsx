import { cx, sortBlogs } from "@/utils"
import BlogLayoutOne from "../blog/BlogLayoutOne"
import BlogLayoutTwo from "../blog/BlogLayoutTwo"
import { allBlogs } from "@/.contentlayer/generated"
import styles from "@/styles"


const FeaturedSection = () => {
  const sortedBlogs = sortBlogs(allBlogs)
  
  return (
    <section
      // className={cx(styles.xMargins2x, styles.flexCenter, styles.topMargins, 'flex-col')}
      className='flex flex-col items-center justify-center w-full px-5 mt-16 sm:mt-24 md:mt-32 sm:px-10 md:px-24 sxl:px-32'
    >
      <h2 className="w-full text-2xl font-bold capitalize md:text-4xl dark:text-light">
        featured posts
      </h2>
      <div className={cx(styles.topMargins, "grid grid-cols-2 grid-rows-2 gap-6")}>
        <article className="relative col-span-2 row-span-2 lg:col-span-1">
          <BlogLayoutOne blog={sortedBlogs[9]} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[6]} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[4]} />
        </article>
      </div>
    </section>
  )
}

export default FeaturedSection
