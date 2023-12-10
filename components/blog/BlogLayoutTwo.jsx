import styles from "@/styles"
import { cx, formatDate } from "@/utils"
import Image from "next/image"
import Link from "next/link"


const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="grid items-center gap-4 lg:grid-cols-12 text-dark">
      <Link
        className="h-full col-span-12 overflow-hidden lg:col-span-4 rounded-xl"
        href={blog.url}>
        <Image 
          src={blog.image.filePath.replace('../public', '')} 
          alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className="object-cover object-center w-full h-full transition-all duration-200 ease-in-out aspect-square hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="col-span-12 lg:col-span-8">
        <span className="text-sm font-semibold uppercase text-accent dark:text-accentDark">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className='mt-6'>
          <h2 className='text-lg font-semibold capitalize text-dark dark:text-light'>
            <span className={cx(styles.underline, 'from-accent/50 to-accent/50')}>
              {blog.title}
            </span>
          </h2>
        </Link>
        <p className="text-xs sm:text-base text-dark/50 dark:text-light/50">
          {formatDate(blog.publishedAt)}
        </p>
      </div>
    </div>
  )
}

export default BlogLayoutTwo
