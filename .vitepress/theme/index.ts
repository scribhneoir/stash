import DefaultTheme from "vitepress/theme";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";
import "@catppuccin/vitepress/theme/macchiato/red.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
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
        homePageShowComment: false,
        lightTheme: "catppuccin_latte",
        darkTheme: "catppuccin_macchiato",
      },
      {
        frontmatter,
        route,
      },
      true
    );
  },
};
