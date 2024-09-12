# Sanity CMS

A CMS solution leveraging [Sanity](https://www.sanity.io/). Sanity is a headless CMS that provides [a client](https://www.sanity.io/docs/js-client) for our frontend to query our content and map to components however we like. This repository holds the code for the editor that we are responsible for hosting and using to interact with our CMS data, as well as some base schema definitions for our content.

This repo should be connected up to an application in a Vercel project, with CI/CD on two branch-based environments:

- `dev` is the development environment, and is connected to the development Sanity project, to be used by our development environments
- `main` is the production environment, and is connected to the production Sanity project, to be used by our production environment

The project will have a dashboard with data and configuration settings in the Sanity console too.

Pushing commits up to these branches will trigger a build and release to the associated domain defined in the Vercel project.

---

# Features

There is automatic revalidation of SSG'd pages when sanity entities are edited. This allows our build step to proactively generate pages for CDN speed loads, and triggers our Vercel instance to automatically update with the new content on the next page load when dependant entities are edited. This should be setup to be handled via webhooks in the Sanity console.

The .ts types for the Sanity data are generated using a codegen tool in this repo, and can be copy pasted wherever needed. This should be used in consuming applications to map the data to react components, and in any potential scripting project when scripting against Sanity data.

---

# Setup

- Run `npm i`
- Setup .env file
- Run `npm run dev` to start the dev server.

---

# Changing a schema

Follow the Sanity docs to edit the schema files. Once you are done, run `npm run codegen` to generate the sanity schema ts definitions. Copy paste the output schema.ts file where required.

See the migration docs for how to script backfilling migrations. https://www.sanity.io/docs/content-migration-cheatsheet