import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BusinessCraft Database Schema',
  tagline: 'Database structure documentation for BuiltGrid integration project',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://builtgrid.businesscraft.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'businesscraft',
  projectName: 'builtgrid-docs',

  onBrokenLinks: 'warn',
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
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/businesscraft-social-card.png',
    // Configure scroll behavior for anchor links
    scrollToTop: true,
    scrollToTopOptions: {
      threshold: 100,
      alwaysShowAfterScrollToTop: true,
    },
    navbar: {
      title: 'BusinessCraft Database Schema',
      logo: {
        alt: 'BusinessCraft Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
                {
                  title: 'Database Schema',
                  items: [
                    {
                      label: 'Overview',
                      to: '/database-schema/overview',
                    },
                    {
                      label: 'Contracts',
                      to: '/database-schema/contracts',
                    },
                    {
                      label: 'Job Costing',
                      to: '/database-schema/job-costing',
                    },
                    {
                      label: 'Inventory',
                      to: '/database-schema/inventory',
                    },
                    {
                      label: 'Customers',
                      to: '/database-schema/customers',
                    },
                  ],
                },
        {
          title: 'More Tables',
          items: [
            {
              label: 'Purchase Orders',
              to: '/database-schema/purchase-orders',
            },
            {
              label: 'Vendors',
              to: '/database-schema/vendors',
            },
            {
              label: 'Lookup Tables',
              to: '/database-schema/lookup-tables',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BusinessCraft Database Schema Documentation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['sql', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;