import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {previewDocumentNode} from './plugins/previewPane'
import schemaTypes from './schemas'
import postType from './schemas/documents/post'
import artistType from './schemas/documents/artist'
import {productionUrl} from './plugins/productionUrl'
import './custom.css'

export default defineConfig({
  name: 'default',
  title: 'sanity-cms',
  projectId: 'vg9ve3gy',
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [
    structureTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({
        apiVersion: '2022-03-25',
        previewSecretId: 'preview.secret',
      }),
    }),
    visionTool({
      defaultApiVersion: '2022-03-25',
    }),
    productionUrl({
      apiVersion: '2022-03-25',
      previewSecretId: 'preview.secret',
      types: [postType.name, artistType.name],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
