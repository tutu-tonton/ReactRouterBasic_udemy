import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// 画面遷移設定

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
