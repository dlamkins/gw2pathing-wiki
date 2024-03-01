// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GW2 Pathing Wiki',
  tagline: 'Markers, trails, and more for Guild Wars 2',
  favicon: 'img/favicon.ico',
  url: 'https://gw2pathing-wiki.com', // TODO: Not sure if this will be the final URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dlamkins', // Usually your GitHub org/user name.
  projectName: 'gw2pathing-wiki', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GW2 Pathing Wiki',
        logo: {
          alt: 'Pathing Wiki Logo',
          src: 'img/pathing-icon.png',
        },
        items: [
          {
            to: '/docs/usage/markers', 
            //acvtiveBasePath: 'docs/usage',
            label: 'User Guide', 
            position: 'left'
          },
          {
            to: '/docs/marker-dev/development/mp_introduction',
            //activeBasePath: 'docs/marker-dev',
            position: 'right',
            label: 'Marker Pack Development',
          },
          {
            to: '/docs/lua-scripting/lua-basics/intro',
            //activeBasePath: 'docs/lua-scripting',
            position: 'right',
            label: 'Lua Scripting',
          },
          {
            href: 'https://github.com/dlamkins/gw2pathing-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `
                  <div style="text-align:center;">
                  <p>This site is not affiliated with ArenaNet, Guild Wars 2, or any of their partners. All copyrights reserved to their respective owners.</p>
                  <p>©2010-${new Date().getFullYear()} ArenaNet, LLC. All rights reserved. Guild Wars, Guild Wars 2, Heart of Thorns,
                  Guild Wars 2: Path of Fire, ArenaNet, NCSOFT, the Interlocking NC Logo, and all associated
                  logos and designs are trademarks or registered trademarks of NCSOFT Corporation. All other
                  trademarks are the property of their respective owners.</p>
                  </div>`,
      },
      announcementBar: {
        id: 'discord', // Any value that will identify this message.
        content:
          'Check out our <a target="_blank" href="https://discord.gg/FYKN3qh">Discord channel</a> for the latest news, prerelease builds, and troubleshooting assistance.',
        backgroundColor: '#8172DA', // Defaults to `#fff`.
        textColor: 'white', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
