import { allBlogs } from "@/.contentlayer/generated";
import BlogCover from "@/components/blog/BlogCover";
import BlogDetails from "@/components/blog/BlogDetails";
import RenderMdx from "@/components/blog/RenderMdx";
import { notFound } from "next/navigation";
import Link from "next/link";

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
            <summary className="capitalize text-lg font-semibold cursor-pointer">
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
                    {
                      heading.level === 'three' ? <span className="flex w-1 h-1 rounded-full bg-dark mr-2">&nbsp;</span> : null
                    }
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
