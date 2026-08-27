// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.TINA_BRANCH || process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // TinaCloud: Client ID + Read-only Token from https://app.tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_PUBLIC_CLIENT_ID || process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "tina-admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "badge_lw",
        label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B / Badge-LW",
        path: "docs/products/badge-lw",
        format: "md",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
            isTitle: true,
            required: true
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0432 \u043C\u0435\u043D\u044E"
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435",
            isBody: true
          }
        ]
      },
      {
        name: "firmware",
        label: "\u041F\u0440\u043E\u0448\u0438\u0432\u043A\u0438",
        path: "docs/firmware",
        format: "md",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
            isTitle: true,
            required: true
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0432 \u043C\u0435\u043D\u044E"
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
