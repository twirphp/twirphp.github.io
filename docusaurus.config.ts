import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TwirPHP',
  tagline: 'Twitch\'s simple RPC framework powered by protobuf, ported to PHP',
  // favicon: 'img/favicon.ico',

  url: 'https://twirphp.github.io',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'twirphp',
  projectName: 'twirphp.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/twirphp/twirphp.github.io/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: 'TwirPHP',
      logo: {
          alt: 'TwirPHP',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://twitchtv.github.io/twirp/',
          label: 'Twirp website',
        },
        {
          to: 'community',
          label: 'Community',
          position: 'right'
        },
        {
          href: 'https://github.com/twirphp/twirp/releases/latest',
          position: 'right',
          className: 'header-download-link header-icon-link',
          'aria-label': 'Download',
        },
        {
          href: 'https://github.com/twirphp/twirp',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link header-icon-link',
          'aria-label': 'GitHub repository',
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
              label: 'About',
              to: '/docs/about',
            },
            {
              label: 'Quickstart',
              to: '/docs/quickstart',
            },
            {
              label: 'Overview',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Get in touch',
              href: '/community',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/twirphp/twirp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://sagikazarmark.hu">Márk Sági-Kazár</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['protobuf', 'php'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
