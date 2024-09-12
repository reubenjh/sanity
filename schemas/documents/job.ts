import {FaUserPlus} from 'react-icons/fa'
import {IoIosLink} from 'react-icons/io'
import {IoShuffleOutline} from 'react-icons/io5'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job',
  icon: FaUserPlus,
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Subtitle', value: 'h4'},
            {title: 'Title', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                icon: IoIosLink,
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    // @ts-expect-error this forces the type to be non optional in the generated type.
                    // however, the default sanity ts definitions dont expect codegen options
                    codegen: {required: true},
                    validation: (rule) => rule.required(),
                  }),
                  defineField({
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: true,
                  }),
                ],
              },
              {
                name: 'internalLink',
                title: 'Internal Link',
                type: 'object',
                icon: IoShuffleOutline,
                fields: [
                  defineField({
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{type: 'post'}, {type: 'artist'}],
                    // @ts-expect-error this forces the type to be non optional in the generated type.
                    // however, the default sanity ts definitions dont expect codegen options
                    codegen: {required: true},
                    validation: (rule) => rule.required(),
                  }),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'youtube',
        },
        {type: 'divider'},
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'added',
      title: 'Added At',
      type: 'date',
      initialValue: () => new Date().toISOString().slice(0, 10),
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      description: 'Email address where applications should go to.',
      type: 'string',
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'available',
      title: 'Available',
      description:
        'Website lists available jobs. Set to false once job is filled for it to be removed.',
      type: 'boolean',
      initialValue: false,
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'position',
      media: 'coverImage',
      available: 'available',
    },
    prepare({title, media, available}) {
      return {title, media, subtitle: `${available ? 'Open' : 'Closed'}`}
    },
  },
})
