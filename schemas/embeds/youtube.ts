import {IoIosPlay} from 'react-icons/io'
import {defineField, defineType} from 'sanity'

// youtube.js
export default defineType({
  name: 'youtube',
  title: 'Video',
  // missing type=document = it doesnt show as a top level item in the sidebar
  type: 'object',
  icon: IoIosPlay,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'orientation',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Landscape', value: 'landscape'},
    //       {title: 'Portrait', value: 'portrait'},
    //     ],
    //   },
    // }),
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare(selection) {
      const {url} = selection

      return {
        title: 'Video',
        subtitle: url,
      }
    },
  },
})
