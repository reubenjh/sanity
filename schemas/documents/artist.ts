import {MdOutlineStarOutline} from 'react-icons/md'
import {IoShuffleOutline} from 'react-icons/io5'
import {IoIosLink} from 'react-icons/io'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  icon: MdOutlineStarOutline,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profile',
      title: 'Profile',
      description: 'Their main profile image. This will appear in portrait orientation.',
      type: 'image',
      options: {hotspot: true},
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      description:
        'Hero image. Landscape orientation. Needs to be large and suit appearing as a darkened header background with the artists name layered over the top.',
      type: 'image',
      options: {hotspot: true},
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureVideo',
      title: 'Feature Video',
      description: 'Optional feature video. "Painting The Realm" style.',
      type: 'youtube',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      description: 'Ideally 3 paragraphs.',
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
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description:
        'Core article content. History... Preferred medium... Notable achievements... Favourite pieces etc etc. Include images/videos/audio of their work, studio etc etc',
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
          type: 'orientedImage',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'youtube',
        },
        {
          type: 'audio',
        },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      description: 'Link to their other content so users can find and support them.',
      type: 'url',
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'joinedAt',
      title: 'Joined At',
      type: 'date',
      initialValue: () => new Date().toISOString().slice(0, 10),
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'profile',
    },
    prepare({title, media}) {
      return {title, media}
    },
  },
})
