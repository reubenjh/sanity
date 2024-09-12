import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post'

  /**
   * Title — `string`
   *
   *
   */
  title: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug: {_type: 'slug'; current: string}

  /**
   * Content — `array`
   *
   *
   */
  content: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: 'image'
        asset: SanityReference<SanityImageAsset>
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
      }>
    | SanityKeyed<Youtube>
  >

  /**
   * Excerpt — `text`
   *
   *
   */
  excerpt: string

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Date — `datetime`
   *
   *
   */
  date: string

  /**
   * Author — `reference`
   *
   *
   */
  author: SanityReference<Author>

  /**
   * Artist — `reference`
   *
   * Optional. If this post is about a specific artist, select them here.
   */
  artist?: SanityReference<Artist>

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<'news' | 'art' | 'guides' | 'events'>>

  /**
   * Featured — `boolean`
   *
   * Will make the article pin to the top of the news feed and appear larger as the feature item. Note you MUST remember to unpin it when it is no longer relevant, as it wont show up in search results, assuming it always appears above in the pin/feature section instead
   */
  featured: boolean

  /**
   * Pinned — `boolean`
   *
   * Will make the article pin to the top of the news feed. Note you MUST remember to unpin it when it is no longer relevant, as it wont show up in search results, assuming it always appears above in the pin/feature section instead
   */
  pinned: boolean
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: 'author'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Picture — `image`
   *
   *
   */
  picture: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Artist
 *
 *
 */
export interface Artist extends SanityDocument {
  _type: 'artist'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug: {_type: 'slug'; current: string}

  /**
   * Profile — `image`
   *
   * Their main profile image. This will appear in portrait orientation.
   */
  profile: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Hero — `image`
   *
   * Hero image. Landscape orientation. Needs to be large and suit appearing as a darkened header background with the artists name layered over the top.
   */
  hero: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Feature Video — `youtube`
   *
   * Optional feature video. "Painting The Realm" style.
   */
  featureVideo?: Youtube

  /**
   * Bio — `array`
   *
   * Ideally 3 paragraphs.
   */
  bio: Array<SanityKeyed<SanityBlock>>

  /**
   * Content — `array`
   *
   * Core article content. History... Preferred medium... Notable achievements... Favourite pieces etc etc. Include images/videos/audio of their work, studio etc etc
   */
  content: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<OrientedImage>
    | SanityKeyed<Youtube>
    | SanityKeyed<Audio>
  >

  /**
   * Link — `url`
   *
   * Link to their other content so users can find and support them.
   */
  link: string

  /**
   * Joined At — `date`
   *
   *
   */
  joinedAt: string
}

/**
 * Job
 *
 *
 */
export interface Job extends SanityDocument {
  _type: 'job'

  /**
   * Position — `string`
   *
   *
   */
  position: string

  /**
   * Content — `array`
   *
   *
   */
  content: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: 'image'
        asset: SanityReference<SanityImageAsset>
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
      }>
    | SanityKeyed<Youtube>
    | SanityKeyed<Divider>
  >

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Added At — `date`
   *
   *
   */
  added: string

  /**
   * Contact — `string`
   *
   * Email address where applications should go to.
   */
  contact: string

  /**
   * Available — `boolean`
   *
   * Website lists available jobs. Set to false once job is filled for it to be removed.
   */
  available: boolean
}

export type OrientedImage = {
  _type: 'orientedImage'
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot

  /**
   * Orientation — `string`
   *
   *
   */
  orientation: 'landscape' | 'portrait'
}

export type Youtube = {
  _type: 'youtube'
  /**
   * YouTube video URL — `url`
   *
   *
   */
  url: string
}

export type Audio = {
  _type: 'audio'
  /**
   * Audio File — `file`
   *
   * Upload the audio file here.
   */
  file: {_type: 'file'; asset: SanityReference<any>}

  /**
   * Thumbnail Image — `image`
   *
   * Upload the thumbnail image for the audio file here.
   */
  thumbnail: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type Divider = {
  _type: 'divider'
  /**
   * Size — `string`
   *
   *
   */
  size?: 'Small' | 'Medium' | 'Large'
}

export type Documents = Post | Author | Artist | Job
