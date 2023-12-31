import { cx } from "@/utils"
import Link from "next/link"


const Tag = ({ link='#', title, scroll=true, ...props }) => {
  return (
    <Link href={link}
      className={cx('inline-block px-6 py-2 sm:px-10 sm:py-3 font-semibold capitalize border rounded-full border-light text-light bg-dark/50',
      'hover:scale-105 transition-all duration-200 ease-in-out border-2 text-sm sm:text-base',
      props.className )} scroll={scroll}>
      {title}
    </Link>
  )
}

export default Tag
