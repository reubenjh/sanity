import {FaUsers} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  icon: FaUsers,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {hotspot: true},
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
  ],
})
