import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BusinessCraft',
  tagline: 'Designed to develop.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://businesscraft.help',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bsncraft', // Usually your GitHub org/user name.
  projectName: 'bc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/businesscraft-social-card.jpg',
    navbar: {
      title: 'BusinessCraft',
      logo: {
        alt: 'BusinessCraft Help',
        src: 'img/icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/news', label: 'News', position: 'left' },
        {
          href: 'https://www.businesscraft.com.au/client-portal',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `<a href="https://www.businesscraft.com.au" target="_blank" rel="noreferrer noopener" aria-label="BusinessCraft Website">
                  <img src="https://businesscraft.help/img/footer_logo.png" alt="BusinessCraft Logo" width="160" height="40" />
                </a>`
            },
            {
              label: 'Support',
              href: 'https://www.businesscraft.com.au/client-portal',
            },
          ]
        },
        {
          title: 'Help',
          items: [
            {
              label: 'Docs',
              to: '/docs/getting-started/businesscraft-overview',
            },
            {
              label: 'News',
              to: '/news',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/businesscraft',
            },
            {
              label: 'About Us',
              href: 'https://www.businesscraft.com.au/about',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BusinessCraft Pty Ltd`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
