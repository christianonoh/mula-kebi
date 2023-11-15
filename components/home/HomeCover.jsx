import { allBlogs } from '@/.contentlayer/generated';
import { cx, sortBlogs } from '@/utils';
import Image from 'next/image'
import React from 'react'
import Tag from '../elements/Tag';
import Link from 'next/link';
import styles from '@/styles';

const HomeCover = () => {
  const sortedBlogs = sortBlogs(allBlogs);
  const blog = sortedBlogs[10];
  return (
    <div className='inline-block w-full'>
      <article className={cx(styles.xMargins, 'flex flex-col items-start relative h-[85vh] justify-end')}>
        <div className='absolute top-0 left-0 z-0 w-full h-full rounded-3xl from-transparent bg-gradient-to-b to-dark/90' />
        <Image src={blog.image.filePath.replace('../public', '')} alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className='object-cover object-center w-full h-full rounded-3xl -z-10'
         />
        <div className={cx(styles.paddings, "z-0 flex flex-col items-start justify-center w-full md:w-3/4 text-light")}>
         <Tag link={`/categories/${blog.tags[0]}`} title={blog.tags[0]} />
         <Link href={blog.url} className='mt-6'>
          <h1 className='text-4xl font-bold capitalize'>
            <span className={cx(styles.underline)}>
              {blog.title}
            </span>
          </h1>
        </Link>
         <p className='hidden mt-4 sm:inline-block md:text-lg lg:text-xl font-inter'>
          {blog.description}
         </p>
        </div>
      </article>
    </div>
  )
}

export default HomeCover
