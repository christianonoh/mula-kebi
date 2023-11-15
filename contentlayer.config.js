import { makeSource, defineDocumentType } from '@contentlayer/source-files'


const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: { type: 'image',
    },
    tags: {
      type: 'list',
      of: { type: 'string', },
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
      required: true,
    },
    isPublished: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `blogs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  /* options */
  contentDirPath: './content',
  documentTypes: [Blog],
})