import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Taiga IoT Docs',
  tagline: 'Product and software documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'http://95.183.13.164:3002',
  baseUrl: '/',

  organizationName: 'b0ka-k',
  projectName: 'taiga-iot-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/b0ka-k/taiga-iot-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Taiga IoT',
      logo: {
        alt: 'Taiga IoT',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/b0ka-k/taiga-iot-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://taigaiot.com',
          label: 'taigaiot.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Getting started',
              to: '/docs/getting-started',
            },
            {
              label: 'Products',
              to: '/docs/products/overview',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/b0ka-k/taiga-iot-docs',
            },
            {
              label: 'Website',
              href: 'https://taigaiot.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taiga IoT. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
