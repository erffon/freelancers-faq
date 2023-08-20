import { FOOTER_DATA } from "@/contents/layout/footer/footerData";
import Link from "next/link";
import style from "./Footer.module.css";

interface IFooter {
  className?: string;
}
const Footer: React.FC<IFooter> = ({ className = "" }) => {
  return (
    <footer
      className={`_container ${className} py-14 flex justify-between items-start border-t border-border-gray/50 relative bg-bgcolor-gray-darker`}
    >
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: FOOTER_DATA.english.texts.introduction,
          }}
          className={style.intro}
        />
        <ul className="flex gap-6">
          {FOOTER_DATA.english.texts.social.map((item) => {
            return (
              <li key={`social-${item.icon}`}>
                <Link href={item.link}>
                  <item.icon className={style.social} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-12">
        <div className="w-max">
          <h3 className={style["links-title"]}>
            {FOOTER_DATA.english.information.title}
          </h3>
          <ul>
            {FOOTER_DATA.english.information.items.map((item) => {
              return (
                <li
                  key={`footer_items_${item.title}`}
                  className={style["links-items"]}
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-max">
          <h3 className={style["links-title"]}>
            {FOOTER_DATA.english.categories.title}
          </h3>
          <ul>
            {FOOTER_DATA.english.categories.items.map((item) => {
              return (
                <li
                  key={`footer_items_${item.title}`}
                  className={style["links-items"]}
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
