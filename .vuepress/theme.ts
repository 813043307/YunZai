import { hopeTheme, navbar, sidebar } from "vuepress-theme-hope";
import { list } from "./list.js";

export default hopeTheme({
  hostname: "https://TimeRainStarSky.github.io/TRSS_Script",

  author: {
    name: "时雨🌌星空",
    url: "https://github.com/TimeRainStarSky",
  },

  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "TimeRainStarSky/TRSS_Script",
  docsDir: "docs",
  docsBranch: "",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  fullscreen: true,

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  locales: {
    "/": {
      navbar: navbar([
        "/",
        { text: "GitHub", icon: "github", link: "https://TimeRainStarSky.github.io/TRSS_Script" },
        { text: "Gitee", icon: "gitee", link: "https://TimeRainStarSky.gitee.io/TRSS_Script" }
      ]),
      sidebar: sidebar({"/": list}),
      footer: "TRSS 脚本 使用文档",
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页"
      }
    }
  },

  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://waline-ashy.vercel.app",
      login: "force"
    },

    copyCode: {
      showInMobile: true
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //           {
    //             src: "/assets/icon/guide-monochrome.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});