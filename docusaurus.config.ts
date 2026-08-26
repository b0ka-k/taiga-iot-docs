import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Taiga IoT Docs',
  tagline: 'Документация по продуктам и ПО',
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
    defaultLocale: 'ru',
    locales: ['ru'],
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
          label: 'Документация',
        },
        {
          href: 'http://95.183.13.164:3002/admin/',
          label: 'Редактор',
          position: 'right',
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
          title: 'Документация',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
            {
              label: 'Начало работы',
              to: '/docs/getting-started',
            },
            {
              label: 'Продукты',
              to: '/docs/products/overview',
            },
          ],
        },
        {
          title: 'Ещё',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/b0ka-k/taiga-iot-docs',
            },
            {
              label: 'Сайт',
              href: 'https://taigaiot.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Taiga IoT. Собрано на Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
