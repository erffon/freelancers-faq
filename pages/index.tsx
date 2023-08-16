import QuestionCards from "@/components/ui/questions/questionsCards";
import { QUESTIONS_DATA_ENGLISH } from "@/contents/questions/questions";
import Layout from "@cmp/layout";
import { HOME_DATA } from "@contents/pages/home";
import style from "./Home.module.css";
import Link from "next/link";
import ROUTES from "@/constants/routes";

const English_Sec1 = HOME_DATA.english.section1;
const English_Sec2 = HOME_DATA.english.section1;

export default function Home() {
  return (
    <Layout
      pageTitle={HOME_DATA.english.seo.pageTitle}
      pageDesc={HOME_DATA.english.seo.pageDesc}
    >
      <section className="pb-12 _container">
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
        <div className="grid grid-cols-2 gap-7 relative">
          {QUESTIONS_DATA_ENGLISH.map((item) => {
            return <QuestionCards link={""} {...item} key={item.title} />;
          })}
          <span className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-bgcolor-gray-light to-transparent z-10" />
        </div>
        <div className="flex items-center justify-center">
          <Link href={English_Sec1.button.link}>
            <button className="text-base font-light text-black border border-black hover:shadow-md hover:bg-white rounded-2xl py-3 px-4">
              {English_Sec1.button.title}
            </button>
          </Link>
        </div>
      </section>
      <section className="pt-20 pb-60 bg-bgcolor-gray-darker _container">
        <div>
          <div></div>
          <div></div>
          <Link href={ROUTES.COMMUNITY}>
            <button></button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
