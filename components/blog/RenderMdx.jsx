"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const RenderMdx = ({ blog }) => {
  // Parse the MDX file via the useMDXComponent hook.
  const Content = useMDXComponent(blog.body.code);

  const blogComponents = {
    Image,
  };
  return (
    <div className='col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    
    '>   <Content components={blogComponents} />
    </div>
  );
};

export default RenderMdx;
