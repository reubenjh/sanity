import {defineField, defineType} from 'sanity'
import {BsArrowsVertical} from 'react-icons/bs'

export default defineType({
  name: 'divider',
  type: 'object',
  title: 'Divider',
  icon: BsArrowsVertical,
  fields: [
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: [
          {title: 'Small', value: 'Small'},
          {title: 'Medium', value: 'Medium'},
          {title: 'Large', value: 'Large'},
        ],
        layout: 'radio',
      },
      initialValue: 'Medium',
    }),
  ],
})
