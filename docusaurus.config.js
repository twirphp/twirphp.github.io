// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TwirPHP',
  tagline: 'Twitch\'s simple RPC framework powered by protobuf, ported to PHP',
  url: 'https://twirphp.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',
  organizationName: 'twirphp',
  projectName: 'twirphp.github.io',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/twirphp/twirphp.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'TwirPHP',
        logo: {
          alt: 'TwirPHP',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['protobuf', 'php'],
      },
    }),
};

module.exports = config;
