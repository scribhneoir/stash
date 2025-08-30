import DefaultTheme from "vitepress/theme";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import { NolebaseUnlazyImg } from "@nolebase/vitepress-plugin-thumbnail-hash/client";

import "@nolebase/vitepress-plugin-thumbnail-hash/client/style.css";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
import "virtual:group-icons.css";

import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(NolebaseGitChangelogPlugin, {
      hideContributorsHeader: true,
      hideChangelogHeader: true,
      hideChangelogNoChangesText: true,
    });
    ctx.app.component("NolebaseUnlazyImg", NolebaseUnlazyImg);
    // ...
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // Obtain configuration from: https://giscus.app/
    giscusTalk(
      {
        repo: "scribhneoir/stash",
        repoId: "R_kgDOPkqoOA",
        category: "General",
        categoryId: "DIC_kwDOPkqoOM4CuveP",
        mapping: "pathname",
        inputPosition: "top",
        lang: "en",
        locales: {
          "en-US": "en",
        },
        reactionsEnabled: false,
        homePageShowComment: false,
        lightTheme:
          "https://giscus.catppuccin.com/themes/latte-red-no-loader.css",
        darkTheme:
          "https://giscus.catppuccin.com/themes/macchiato-red-no-loader.css",
      },
      {
        frontmatter,
        route,
      },
      true
    );
  },
};
