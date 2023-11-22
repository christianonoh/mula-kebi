import Image from 'next/image'
import React from 'react'
import Tag from '../elements/Tag'
import { cx } from '@/utils'
import styles from '@/styles'
import { slug } from 'github-slugger'

const BlogCover = ({ blog }) => {
  return (
    <section className='relative'>
      <div className={cx(styles.flexCenter, 'flex flex-col h-[70vh] relative')}>
        <div className={cx(styles.flexCenter, 'z-10 flex-col w-5/6 text-light text-center')}>
          <Tag link={`/categories/${slug(blog.tags[0])}`} title={blog.tags[0]} />
          <h1 className='mt-6 text-4xl font-bold leading-relaxed capitalize sm:text-5xl'>
            {blog.title}
          </h1>
        </div>
        <div className='absolute top-0 left-0 z-0 w-full h-full bg-dark/60' />
        <Image src={blog.image.filePath.replace('../public', '')} alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className='object-cover object-center w-full h-full -z-10'
        />
      </div>
    </section>
  )
}

export default BlogCover
