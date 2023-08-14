import QuestionCards from "@/components/ui/questions/questionsCards";
import { QUESTIONS_DATA_ENGLISH } from "@/contents/questions/questions";
import Layout from "@cmp/layout";
import { HOME_DATA } from "@contents/pages/home";
import style from "./Home.module.css";

const English_Sec1 = HOME_DATA.english.section1;

export default function Home() {
  return (
    <Layout
      pageTitle={HOME_DATA.english.seo.pageTitle}
      pageDesc={HOME_DATA.english.seo.pageDesc}
    >
      <div className={style["section1-slogan"]}>
        <h2 className={style["section1-pretitle"]}>
          {English_Sec1.title.subTitle}
        </h2>
        <h2 className={style["section1-midtitle"]}>
          {English_Sec1.title.midTitle}
        </h2>
        <h2 className={style["section1-posttitle"]}>
          {English_Sec1.title.postTitle}
        </h2>
        <p className={style["section1-caption"]}>{English_Sec1.caption}</p>
      </div>
      <div>
        {QUESTIONS_DATA_ENGLISH.map((item) => {
          return <QuestionCards link={""} {...item} />;
        })}
      </div>
    </Layout>
  );
}
