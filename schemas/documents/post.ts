import {LuTextQuote} from 'react-icons/lu'
import {IoIosLink} from 'react-icons/io'
import {IoShuffleOutline} from 'react-icons/io5'
import {format, parseISO} from 'date-fns'
import {defineField, defineType} from 'sanity'
import authorType from './author'
import artistType from './artist'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'post',
  title: 'Post',
  icon: LuTextQuote,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
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
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
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
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: authorType.name}],
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      description: 'Optional. If this post is about a specific artist, select them here.',
      type: 'reference',
      to: [{type: artistType.name}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'News', value: 'news'},
              {title: 'Art', value: 'art'},
              {title: 'Guides', value: 'guides'},
              {title: 'Events', value: 'events'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      description:
        'Will make the article pin to the top of the news feed and appear larger as the feature item. Note you MUST remember to unpin it when it is no longer relevant, as it wont show up in search results, assuming it always appears above in the pin/feature section instead',
      type: 'boolean',
      initialValue: false,
      // @ts-expect-error this forces the type to be non optional in the generated type.
      // however, the default sanity ts definitions dont expect codegen options
      codegen: {required: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pinned',
      title: 'Pinned',
      description:
        'Will make the article pin to the top of the news feed. Note you MUST remember to unpin it when it is no longer relevant, as it wont show up in search results, assuming it always appears above in the pin/feature section instead',
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
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({title, media, author, date}) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
})
