import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/components/blog/BlogLayoutThree";
import Tag from "@/components/elements/Tag";
import { cx, getCategories } from "@/utils";
import { slug as slugger } from "github-slugger";

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const slug = params.slug;

  return {
    title: `${slug.replace("-", " ")} Blogs`,
    description: `Discover more blogs about ${
      slug === "all" ? "web developement" : slug
    } and expand your knowledge!`,
  };
}

const CategoriesPage = ({ params }) => {
  const slug = params.slug;

  const allCategories = getCategories(allBlogs);

  /**
   * Filtered list of blogs based on the provided slug.
   *
   * @param {string} slug - The slug to filter the blogs by.
   * @returns {Array} - Filtered list of blogs.
   */
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slugger(tag);

      if (slug === "all") return true;

      return slugified === slug;
    });
  });

  // Sort all categories then prepend 'all' to the list.
  allCategories.sort().unshift("all");

  // 404 if the blog does not exist.
  // if (!blogs) notFound();
  return (
    <article>
      <div className="flex flex-col mx-5 mt-5 sm:mx-10 sm:mt-10">
        <div className="md:px-10 lg:px-20">
          <h1 className="mt-6 text-2xl font-semibold md:text-4xl lg:text-5xl text-dark dark:text-light">
            {"#"}
            {slug}
          </h1>
          <p className="mt-2 text-dark dark:text-light">
            Discover more categories and expand your knowledge!
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-6 px-0 py-6 mt-10 md:px-10 lg:px-20 border-y-2 dark:border-light">
          {allCategories.map((tag) => (
            <Tag
              link={`/categories/${slugger(tag)}`}
              title={`#${slugger(tag)}`}
              key={tag}
              scroll={false}
              className={`!border-dark dark:!border-light !lowercase ${
                slug == slugger(tag)
                  ? "!bg-dark !text-light dark:!text-dark dark:!bg-light"
                  : "!bg-transparent !text-dark dark:!text-light"
              }`}
            />
          ))}
        </div>

        {/* Blogs */}
        <div
          className={cx(
            "grid lg:grid-cols-3 sm:grid-cols-2  gap-16 mt-5 sm:mt-10 md:mt-24 lg:mt-32 md:px-10 lg:px-20"
          )}
        >
          {blogs.map((blog, index) => (
            <article key={index}>
              <BlogLayoutThree blog={blog} />
            </article>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CategoriesPage;
