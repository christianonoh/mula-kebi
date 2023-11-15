import Image from 'next/image'
import { allBlogs } from '@/.contentlayer/generated'
import { sortBlogs } from '@/utils';
import HomeCover from '@/components/home/HomeCover';
import FeaturedSection from '@/components/home/FeaturedSection';

export default function Home() {
  
  return (
    <main className="">
      <HomeCover />
      <FeaturedSection />
    </main>
  )
}
