import { defineConfig } from "vitepress";
import { nav } from "./navbar";
import { sidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "唐啸博客",
  // description: "唐啸",
  head: [
    // 改变title的图标
    [
        'link',
        {
            rel: 'icon',
            href: '/favicon.ico'
        }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/avatar.jpg",
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ]
  },
});
