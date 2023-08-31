export * from './navbar';
import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '个人成长',
    items: [
      {
        text: '音视频学习',
        link: 'md/video/index'
      },
      {
        text: 'Rust学习',
        link: 'md/rust/index'
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Robot-7' }
    ]
  }
];