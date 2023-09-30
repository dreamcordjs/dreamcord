// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dreamcord",
  tagline: "The Discord package of your dreams.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dreamcord.js.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dreamcordjs", // Usually your GitHub org/user name.
  projectName: "dreamcord", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  githubHost: "github.com",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/dreamcordjs/dreamcord/tree/main/apps/docs",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Dreamcord",
        logo: {
          alt: "Dreamcord Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            to: "api",
            label: "API",
            position: "left",
          },
          {
            href: "https://github.com/dreamcordjs/dreamcord",
            "aria-label": "GitHub",
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Information",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
              {
                label: "API",
                to: "/api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/ToastedDev",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/dreamcordjs/dreamcord",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dreamcord Labs. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-typedoc-api",
      {
        projectRoot: path.resolve("../.."),
        packages: [
          {
            path: "packages/dreamcord",
            entry: "src/index.ts",
          },
          {
            path: "packages/builders",
            entry: "src/index.ts",
          },
          {
            path: "packages/api-types",
            entry: "src/index.ts",
          },
        ],
        minimal: true,
        readmes: true,
        changelogs: true,
        debug: true,
        gitRefName: "main",
      },
    ],
  ],
};

module.exports = config;
