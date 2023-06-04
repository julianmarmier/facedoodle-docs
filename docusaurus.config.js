// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FaceDoodle',
  tagline: 'Draw with your face!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://facedoodle-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/julianmarmier/facedoodle-docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FaceDoodle',
        logo: {
          alt: 'FaceDoodle Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://gitlab.epfl.ch/facedoodle',
            label: 'GitLab',
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
                label: 'Parts Required',
                to: '/docs/parts',
              },
              {
                label: 'Setting up the Software',
                to: '/docs/software',
              },
              {
                label: 'Electronics & Hardware',
                to: '/docs/electronics',
              },
              {
                label: 'Building the Plotter',
                to: '/docs/build',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'iOS Application',
                href: 'https://gitlab.epfl.ch/facedoodle/app',
              },
              {
                label: '3D Parts',
                href: 'https://gitlab.epfl.ch/facedoodle/parts',
              },
              {
                label: 'Arduino/ESP32-CAM Code',
                href: 'https://gitlab.epfl.ch/facedoodle/esp32',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitLab',
                href: 'https://gitlab.epfl.ch/facedoodle',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FaceDoodle. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        options: {
          themeVariables: {
            fontFamily: "font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;",
          }
        }
      }
    }),
};

module.exports = config;
