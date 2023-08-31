import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    '/md/video/': [
      {
        text: '音视频学习',
        items: [
          {
            text: 'YUV数据的渲染',
            link: '/md/video/yuv/README.md'
          }
        ]
      },
    ]
  };