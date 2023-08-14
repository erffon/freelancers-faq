import Layout from "@cmp/layout";
import { HOME_DATA } from "@contents/pages/home";
import style from "./Home.module.css";

export default function Home() {
  return (
    <Layout
      pageTitle={HOME_DATA.english.seo.pageTitle}
      pageDesc={HOME_DATA.english.seo.pageDesc}
    >
      <div className={style["section1-slogan"]}>
        <h2 className={style["section1-pretitle"]}>
          {HOME_DATA.english.section1.title.subTitle}
        </h2>
        <h2 className={style["section1-midtitle"]}>
          {HOME_DATA.english.section1.title.midTitle}
        </h2>
        <h2 className={style["section1-posttitle"]}>
          {HOME_DATA.english.section1.title.postTitle}
        </h2>
        <p className={style["section1-caption"]}>
          {HOME_DATA.english.section1.caption}
        </p>
      </div>
      <div></div>
    </Layout>
  );
}
