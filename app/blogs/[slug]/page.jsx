import { allBlogs } from "@/.contentlayer/generated";
import BlogCover from "@/components/blog/BlogCover";
import BlogDetails from "@/components/blog/BlogDetails";
import RenderMdx from "@/components/blog/RenderMdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const slug = params.slug;

  // Find the blog for the current page.
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug);
  if (!blog) return;

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const updatedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];

  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string" ?
      [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")] : blog.image;
  }

  const ogImages = imageList.map(img => {
    return { url: img.includes("http")
      ? img
      : siteMetadata.siteUrl + img,
    alt: blog.title,}
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      type: "article",
      locale: "en_US",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      images: ogImages,
      locale: "en_US",
      type: "website",
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

const BlogPage = ({ params }) => {
  const slug = params.slug;

  // Find the blog for the current page.
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug);

  // 404 if the blog does not exist.
  if (!blog) notFound();

  return (
    <article>
      <BlogCover blog={blog} />
      <BlogDetails blog={blog} slug={slug} />
      <div className="grid grid-cols-12 gap-16 px-10 mt-8">
        {/* Table of Contents */}
        <div className="col-span-4">
          <details
            className="p-4 border border-dark border-solid text-dark rounded-lg sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table of contents
            </summary>
            <ul className="mt-4 text-base font-inter">
              {blog.toc.map((heading) => (
                <li className="py-1" key={heading.slug}>
                  <Link
                    href={`#${heading.slug}`}
                    data-level={heading.level}
                    className="
                  data-[level=two]:pl-0
                  data-[level=two]:pt-2
                  data-[level=two]:border-t
                  data-[level=three]:pl-6
                  border-solid border-dark/50 flex items-center justify-start"
                  >
                    {heading.level === "three" ? (
                      <span className="flex w-1 h-1 mr-2 rounded-full bg-dark">
                        &nbsp;
                      </span>
                    ) : null}
                    <span className="hover:underline">{heading.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Blog Post  */}
        <RenderMdx blog={blog} />
      </div>
    </article>
  );
};

export default BlogPage;
