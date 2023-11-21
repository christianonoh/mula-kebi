"use client"

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const RenderMdx = ({ blog }) => {
  // Parse the MDX file via the useMDXComponent hook.
  const Content = useMDXComponent(blog.body.code)

  const blogComponents = {
    Image,
  }
  return (
    <article className='col-span-8 prose prose-lg font-inter max-w-max
      prose-blockquote:py-2
      prose-blockquote:px-6
      prose-blockquote:rounded-r-lg
      prose-blockquote:not-italic
    prose-blockquote:border-accent
    prose-blockquote:bg-accent/20
    
    prose-li:marker:text-accent
    
    '>
      <Content components={blogComponents} />
    </article>
  )
}

export default RenderMdx
