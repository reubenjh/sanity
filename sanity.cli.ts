import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vg9ve3gy',
    dataset: import.meta.env.SANITY_STUDIO_DATASET,
  },
})
