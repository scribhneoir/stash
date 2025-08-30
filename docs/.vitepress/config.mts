import { defineConfig } from "vitepress";
import { RSSOptions, RssPlugin } from "vitepress-plugin-rss";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { BiDirectionalLinks } from "@nolebase/markdown-it-bi-directional-links";
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import { ThumbnailHashImages } from "@nolebase/vitepress-plugin-thumbnail-hash/vite";
import { UnlazyImages } from "@nolebase/markdown-it-unlazy-img";
import { generateSidebar } from "vitepress-sidebar";

const baseUrl = "https://scribhneoir.com";
const RSS: RSSOptions = {
  title: "Scribhneoir's Stash",
  baseUrl,
  copyright: "Copyright (c) 2025-present, Scribhneoir",
  description: "Scattered bits of scratch paper",
  language: "en-US",
  author: {
    name: "Scribhneoir",
    email: "scribhneoir21@gmail.com",
    link: "https://scribhneoir.com",
  },
  icon: true,
  filename: "feed.rss",
  log: true,
  ignoreHome: true,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/icon.svg" }]],
  vite: {
    plugins: [
      RssPlugin(RSS),
      groupIconVitePlugin(),
      ThumbnailHashImages(),
      GitChangelog({
        repoURL: () => "https://github.com/scribhneoir/stash",
      }),
      GitChangelogMarkdownSection(),
    ],
  },

  vue: {
    template: {
      transformAssetUrls: {
        // Other configurations...
        NolebaseUnlazyImg: ["src"],
      },
    },
  },

  srcDir: ".",

  title: "Scribhneoir's Stash",
  description: "Scattered bits of scratch paper",
  cleanUrls: true,
  base: "/stash/",

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
      md.use(BiDirectionalLinks());
      md.use(InlineLinkPreviewElementTransform);
      md.use(UnlazyImages(), {
        imgElementTag: "NolebaseUnlazyImg",
      });
    },
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-macchiato",
    },
  },

  themeConfig: {
    siteTitle: "Stash",
    logo: "/icon.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Sketches", link: "/sketch" },
      { text: "Articles", link: "/article" },
      { text: "Tomes", link: "/tome" },
    ],

    footer: {
      copyright: "Copyright © 2025-present Josiah McCracken",
    },

    sidebar: generateSidebar({
      documentRootPath: "docs",
      includeFolderIndexFile: true,
      collapsed: true,
      collapseDepth: 2,
    }),

    socialLinks: [{ icon: "github", link: "https://github.com/scribhneoir" }],
  },
});
