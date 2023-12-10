import styles from "@/styles"
import { cx, formatDate } from "@/utils"
import Image from "next/image"
import Link from "next/link"


const BlogLayoutThree = ({blog}) => {
  return (
    <div className="flex flex-col gap-4 text-dark dark:text-light">
      <Link
        className="h-full col-span-4 overflow-hidden rounded-xl"
        href={blog.url}>
        <Image 
          src={blog.image.filePath.replace('../public', '')} 
          alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className="object-cover object-center w-full h-full transition-all duration-200 ease-in-out hover:scale-105 aspect-[4/3]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col w-full mt-4">
        <span className="text-sm font-semibold uppercase text-accent dark:text-accentDark">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className='mt-1'>
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

export default BlogLayoutThree;
