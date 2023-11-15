import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { DribbbleIcon, GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from '../Icons'
import { cx } from '@/utils'
import styles from '@/styles'

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full p-4 px-5 sm:px-10'>
      <Logo />
      <nav className='fixed z-30 flex items-center justify-center gap-4 px-8 py-3 font-medium capitalize translate-x-1/2 border border-solid rounded-full border-dark top-6 right-1/2 bg-light/80 backdrop-blur-sm'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div className='flex items-center gap-2'>
        <a href="https://github.com/christianonoh" className='w-6 h-6'><GithubIcon className='transition-all duration-200 ease-in-out hover:scale-125' /></a>
        <a href="https://github.com/christianonoh" className='w-6 h-6'><TwitterIcon className='transition-all duration-200 ease-in-out hover:scale-125' /></a>
        <a href="https://github.com/christianonoh" className='w-6 h-6'><DribbbleIcon className='transition-all duration-200 ease-in-out hover:scale-125' /></a>
        <a href="https://github.com/christianonoh" className='w-6 h-6'><LinkedinIcon className='transition-all duration-200 ease-in-out hover:scale-125' /></a>
      </div>
    </header>
  )
}

export default Header
