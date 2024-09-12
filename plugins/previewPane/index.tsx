// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference

import {DefaultDocumentNodeResolver} from 'sanity/structure'
import postType from '../../schemas/documents/post'
import artistType from '../../schemas/documents/artist'

import DocumentPreviewPane from './DocumentPreviewPane'

export const previewDocumentNode = ({
  apiVersion,
  previewSecretId,
}: {
  apiVersion: string
  previewSecretId: `${string}.${string}`
}): DefaultDocumentNodeResolver => {
  return (S, {schemaType}) => {
    switch (schemaType) {
      case postType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({document}) => (
              <DocumentPreviewPane
                slug={document.displayed.slug?.current}
                apiVersion={apiVersion}
                previewSecretId={previewSecretId}
                type={postType.name}
              />
            ))
            .title('Preview'),
        ])
      case artistType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({document}) => (
              <DocumentPreviewPane
                slug={document.displayed.slug?.current}
                apiVersion={apiVersion}
                previewSecretId={previewSecretId}
                type={artistType.name}
              />
            ))
            .title('Preview'),
        ])

      default:
        return null
    }
  }
}
