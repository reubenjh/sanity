import {BsSoundwave} from 'react-icons/bs'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'audio',
  title: 'Audio',
  // missing type=document = it doesnt show as a top level item in the sidebar
  type: 'object',
  icon: BsSoundwave,
  fields: [
    defineField({
      name: 'file',
      type: 'file',
      title: 'Audio File',
      description: 'Upload the audio file here.',
      options: {
        accept: 'audio/*', // This ensures only audio files can be selected
      },
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail Image',
      description: 'Upload the thumbnail image for the audio file here.',
      options: {
        hotspot: true,
      },
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
      title: 'file.asset.originalFilename', // Display the file name in the preview
      media: 'thumbnail', // Use the thumbnail image as the preview image
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media,
      }
    },
  },
})
