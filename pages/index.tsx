import QuestionCards from "@/components/ui/questions/questionsCards";
import { QUESTIONS_DATA_ENGLISH } from "@/contents/questions/questions";
import Layout from "@cmp/layout";
import { HOME_DATA } from "@contents/pages/home";
import style from "./Home.module.css";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";

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
        <div className="border border-textcolor-paragraph px-5 py-4 rounded-2xl flex items-center justify-between">
          <div className="flex">
            {HOME_DATA.english.section2.cta_box.images.map((src, index) => {
              let zIndex;
              switch (index) {
                case 0:
                  zIndex = "z-20";
                  break;
                case 1:
                  zIndex = "z-10";
                  break;
                case 2:
                  zIndex = "z-0";
                  break;
              }

              return (
                <Image
                  key={src}
                  src={src}
                  alt={src}
                  width={66}
                  height={66}
                  className={`${
                    index !== 0 ? "-ml-8" : ""
                  } ${zIndex} border-2 shadow-md border-white rounded-full`}
                />
              );
            })}
          </div>
          <div>
            <h3 className="text-textcolor-heading font-semibold text-lg">
              {HOME_DATA.english.section2.cta_box.texts.title}
            </h3>
            <div className="flex items-center gap-3">
              <p className="text-textcolor-paragraph  font-light text-base">
                {HOME_DATA.english.section2.cta_box.texts.caption}
              </p>
              <HOME_DATA.english.section2.cta_box.texts.icon className="w-6 h-6 opacity-60" />
            </div>
          </div>
          <button className="cta">
            <Link href={HOME_DATA.english.section2.cta_box.ctaButton.link}>
              {HOME_DATA.english.section2.cta_box.ctaButton.title}
            </Link>
          </button>
        </div>
        <p>errrrsf </p>
      </section>
    </Layout>
  );
}
