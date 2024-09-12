// env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_DATASET: string
  readonly SANITY_STUDIO_CONSUMING_SITE: string
  readonly SANITY_STUDIO_API_BASE_PATH: string
  readonly SANITY_STUDIO_API_KEY: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
