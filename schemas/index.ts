import {SchemaTypeDefinition} from 'sanity'

import postType from './documents/post'
import authorType from './documents/author'
import artistType from './documents/artist'
import jobType from './documents/job'
import youtubeType from './embeds/youtube'
import audioType from './embeds/audio'
import orientedImageType from './embeds/orientedImage'
import dividerType from './embeds/divider'

const schemaTypes: SchemaTypeDefinition[] = [
  // sidebar
  postType,
  authorType,
  artistType,
  jobType,
  // not included in sidebar
  orientedImageType,
  youtubeType,
  audioType,
  dividerType,
]

export default schemaTypes
