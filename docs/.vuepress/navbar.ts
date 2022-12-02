import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  /**
   * 导航栏
   * 分类
   * 没增加分类需要添加到这里
   */
  {
    text: "文章分类",
    icon: "note",
    children: [
      {
        text: "Node",
        icon: "note",

        link: "/category/node/",
      },
      {
        text: "JavaScript",
        icon: "note",

        link: "/category/javascript/",
      },
      {
        text: "PDF书籍",
        icon: "note",
        link: "/category/PDF/",
      },
    ],
  },

  // {
  //   text: "个人项目展示",
  //   icon: "creative",
  //   children: [
  //     {
  //       text: "电商后台管理项目",
  //       icon: "creative",
  //       link: "http://124.221.62.120:5002/",
  //     },
  //     {
  //       text: "新闻门户网站(前后端项目)",
  //       icon: "creative",
  //       link: "http://124.221.62.120:5000/",
  //     },
  //   ],
  // },
]);
