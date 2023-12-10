import Link from "next/link";
import Tag from "../elements/Tag";
import Image from "next/image";
import { cx } from "@/utils";
import styles from "@/styles";
import { slug as slugger } from "github-slugger";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-0 w-full h-full rounded-xl from-transparent bg-gradient-to-b to-dark/90" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        alt={blog.title}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        className="object-cover object-center w-full h-full rounded-xl"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute bottom-0 z-20 p-4 text-light">
        <Tag
          link={`/categories/${slugger(blog.tags[0])}`}
          title={blog.tags[0]}
          className="!px-4 !sm:px-6 !py-1 !sm:py-2 !border text-sm"
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="mt-2 text-sm font-bold capitalize sm:mt-4 xs:text-base sm:text-xl md:text-2xl text-light">
            <span className={cx(styles.underline)}>{blog.title}</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
