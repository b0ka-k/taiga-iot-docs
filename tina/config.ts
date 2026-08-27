import { defineConfig } from "tinacms";

/**
 * TinaCMS POC for Taiga IoT Docs (Docusaurus).
 *
 * Local editing (no TinaCloud):
 *   npm run start:tina
 *   open http://localhost:3000/tina-admin/index.html
 *
 * Sveltia stays at /admin/ — Tina uses /tina-admin/ to avoid conflict.
 */
export default defineConfig({
  branch:
    process.env.TINA_BRANCH ||
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main",

  clientId: process.env.TINA_CLIENT_ID || null,
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
