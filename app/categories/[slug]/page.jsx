import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/components/blog/BlogLayoutThree";
import Tag from "@/components/elements/Tag";
import { cx } from "@/utils";
import { slug as slugger }  from 'github-slugger';
// 

const CategoriesPage = ({ params }) => {
  const slug = params.slug;

    const allCategories = [];


    /**
     * Filtered list of blogs based on the provided slug.
     *
     * @param {string} slug - The slug to filter the blogs by.
     * @returns {Array} - Filtered list of blogs.
     */
    const blogs = allBlogs.filter(blog => {
      return blog.tags.some(tag => {
        const slugified = slugger(tag);

        if (!allCategories.includes(slugified)) {
          allCategories.push(slugified);
        }

        if (slug === 'all') return true;

        return slugified === slug;
      })
    })

    // Sort all categories then prepend 'all' to the list.
    allCategories.sort().unshift('all');

    // 404 if the blog does not exist.
    // if (!blogs) notFound();
  return (
    <article>
      <div className="sm:mx-10 mx-5 flex flex-col mt-5 sm:mt-10">
        <div className="md:px-10 lg:px-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-dark mt-6">
            {'#'}{slug}
          </h1>
          <p className="mt-2 text-dark">Discover more categories and expand your knowledge!</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-6 px-0 md:px-10 lg:px-20 py-6 border-y-2 mt-10">
          {
            allCategories.map((tag) => (
              <Tag link={`/categories/${slugger(tag)}`} title={`#${slugger(tag)}`} key={tag}
              className={`!border-dark !lowercase ${slug == slugger(tag) ? '!bg-dark !text-light' : '!bg-transparent !text-dark'}`} />
          ))}
        </div>
          
          {/* Blogs */}
        <div className={cx("grid lg:grid-cols-3 sm:grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-16 mt-5 sm:mt-10 md:mt-24 lg:mt-32")}>
        {blogs.map((blog, index) => (
          <article key={index}>
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
        
      </div>
      </div>
    </article>
  )
}

export default CategoriesPage
