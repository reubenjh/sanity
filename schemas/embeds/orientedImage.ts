import {FaRegImages} from 'react-icons/fa6'

import {defineField, defineType} from 'sanity'
import OrientedImage from '../../components/OrientedImage'

export default defineType({
  name: 'orientedImage',
  title: 'Oriented Image',
  // extended default image
  type: 'image',
  icon: FaRegImages,
  fields: [
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          {title: 'Landscape', value: 'landscape'},
          {title: 'Portrait', value: 'portrait'},
        ],
        layout: 'radio', // Displays the options as radio buttons
      },
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required().min(2),
    }),
  ],
  components: {
    preview: OrientedImage,
  },
  preview: {
    select: {
      media: 'asset', // Select the entire asset object
      orientation: 'orientation',
    },
    prepare(selection) {
      const {media, orientation} = selection

      return {
        title: `Image ${orientation ? `(${orientation})` : ''}`,
        media,
        orientation,
      }
    },
  },
})
