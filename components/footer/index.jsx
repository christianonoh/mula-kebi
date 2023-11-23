"use client"

import styles from "@/styles"
import { cx } from "@/utils"
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../Icons'
import { useForm } from "react-hook-form";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";


const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <footer className={cx(styles.yMargins, styles.yPaddings, "rounded-3xl mx-5 sm:mx-10 bg-dark text-light")}>
      <div className={cx(styles.flexCenter, styles.xPaddings, "flex-col ")}>
        <h2 className="text-3xl text-center">
        Interesting Stories | Updates | Guides
        </h2>
        <p className="max-w-sm my-5 text-center font-inter">
          Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
        </p>
        <form
          className="flex items-stretch xs:min-w-[384px] p-2 my-6 rounded-md bg-light"
          onSubmit={handleSubmit(onSubmit)}>
          <input type="email" 
            className="py-2 bg-transparent border-0 border-b border-solid focus:border-dark focus:ring-0 text-dark font-inter" 
            placeholder="Enter your email"
            {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
          />
          <input type="submit" className="px-4 py-2 ml-2 rounded-lg flex-0 bg-dark text-light" />
        </form>
        <div className='flex items-center gap-2'>
          <a href={siteMetadata.github} className='w-6 h-6'><GithubIcon className='transition-all duration-200 ease-in-out fill-light hover:scale-125' /></a>
          <a href={siteMetadata.twitter} className='w-6 h-6'><TwitterIcon className='transition-all duration-200 ease-in-out hover:scale-125' /></a>
          <a href={siteMetadata.linkedin} className='w-6 h-6'><LinkedinIcon className='transition-all duration-200 ease-in-out hover:scale-125' /></a>
          <a href={siteMetadata.dribble} className='w-6 h-6'><DribbbleIcon className='transition-all duration-200 ease-in-out hover:scale-125' /></a>
        </div>
      </div>
      <div className={cx(styles.xPaddings, "flex  items-center justify-between pt-6 flex-col mt-10 border-t border-solid p border-light md:flex-row sm:text-sm text-xs")}>
        <span>© 2023 Christian Onoh. All rights reserved.</span>
        <span className="text-center underline">
          <Link href="/sitemap.xml">
            sitemap.xml
          </Link>
        </span>
        <div>
          Made with &hearts; by <a href="https://christianonoh.vercel.app" className="underline hover:text-purple-600">Christian Onoh</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
