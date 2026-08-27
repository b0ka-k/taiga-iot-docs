import { defineConfig } from "tinacms";

/**
 * TinaCMS for Taiga IoT Docs (Docusaurus).
 *
 * Local (без TinaCloud): npm run start:tina → http://localhost:3000/tina-admin/index.html
 * Production (TinaCloud): https://95.183.13.164:3443/tina-admin/
 *
 * Sveltia: /admin/ — Tina: /tina-admin/
 */
const branch =
  process.env.TINA_BRANCH ||
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // TinaCloud: Client ID + Read-only Token from https://app.tina.io
  clientId:
    process.env.NEXT_PUBLIC_TINA_CLIENT_ID ||
    process.env.TINA_PUBLIC_CLIENT_ID ||
    process.env.TINA_CLIENT_ID ||
    null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "tina-admin",
    publicFolder: "static",
  },

  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },

  schema: {
    collections: [
      {
        name: "badge_lw",
        label: "Продукты / Badge-LW",
        path: "docs/products/badge-lw",
        format: "md",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Название страницы",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Позиция в меню",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Содержимое",
            isBody: true,
          },
        ],
      },
      {
        name: "firmware",
        label: "Прошивки",
        path: "docs/firmware",
        format: "md",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Название страницы",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Позиция в меню",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Содержимое",
            isBody: true,
          },
        ],
      },
    ],
  },
});
