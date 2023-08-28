import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    '/video/': [
      {
        text: '音视频学习',
        items: [
          {
            text: 'YUV数据的渲染',
            link: '/video/yuv/README.md'
          }
        ]
      },
    ]
  };