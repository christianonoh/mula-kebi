import Image from 'next/image'
import LogoSrc from '@/public/images/logo.svg';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='w-16'>
        <Image src={LogoSrc} className='w-full h-auto border border-solid rounded-full border-dark' alt='Logo' />
      </div>
    </Link>
  )
}

export default Logo
