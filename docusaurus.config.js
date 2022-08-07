// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Mathematik, Informatik und Programmierung',
    tagline: 'Mathematik und Informatik sind cool',
    url: 'https://www.niklas-birk.de',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/niklas-birk-icon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'niklas', // Usually your GitHub org/user name.
    // projectName: 'niklas_birk_blog', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'de',
        locales: ['de'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                // docs: false,
                docs: {
                  sidebarPath: require.resolve('./sidebars.js'),
                  remarkPlugins: [math],
                  rehypePlugins: [katex],
                //   // Please change this to your repo.
                //   // Remove this to remove the "edit this page" links.
                //   // editUrl:
                //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     // editUrl:
                //     //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: 'Mathematik und Informatik',
                logo: {
                    alt: 'Logo von Niklas Birk',
                    src: 'img/niklas-birk-logo.svg',
                },
                items: [
                    {
                      type: 'doc',
                      docId: 'intro',
                      position: 'left',
                      label: 'Mathematik, Informatik und Programmierung',
                    },
                    // {
                    //     to: '/blog',
                    //     label: 'Blog',
                    //     position: 'left'
                    // },
                    {
                        href: 'https://git.niklas-birk.de/niklas/niklas_birk_blog',
                        label: 'Zum Code',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                      title: 'Themen',
                      items: [
                        {
                          label: 'Mathematik',
                          to: '/docs/mathematik',
                        },
                          {
                              label: 'Informatik',
                              to: '/docs/informatik',
                          },
                          {
                              label: 'Programmierung',
                              to: '/docs/programmierung',
                          },
                      ],
                    },
                    {
                        title: 'Socials',
                        items: [
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/SirNik_OdTW',
                            },
                            {
                                label: 'Mastodon',
                                href: 'https://mastodon.social/web/@SirNik',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            // {
                            //     label: 'Blog',
                            //     to: '/blog',
                            // },
                            {
                                label: 'Website',
                                href: 'https://www.niklas-birk.de',
                            },
                            {
                                label: 'Gitea',
                                href: 'https://git.niklas-birk.de',
                            },
                            {
                                label: 'Surveys',
                                href: 'https://survey.niklas-birk.de',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Niklas Birk. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
};

module.exports = config;
