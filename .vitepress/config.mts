import { defineConfig } from "vitepress";
import { RSSOptions, RssPlugin } from "vitepress-plugin-rss";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

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
  vite: {
    plugins: [RssPlugin(RSS), groupIconVitePlugin()],
  },

  srcDir: "docs",

  title: "Scribhneoir's Stash",
  description: "Scattered bits of scratch paper",
  cleanUrls: true,
  base: "/stash/",

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-macchiato",
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Josiah McCracken",
    },

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/scribhneoir" }],
  },
});
