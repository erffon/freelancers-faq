import { HEADER_DATA } from "../../../contents/layout/header/headerData";
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";

interface IHeader {
  className?: string;
}

const Header: React.FC<IHeader> = ({ className = "" }) => {
  return (
    <header className={`_container ${style["container"]} ${className}`}>
      <Link href="/" className="hover:opacity-70">
        <Image
          src={HEADER_DATA.english.logoImage}
          alt={"Iran's logo"}
          width={80}
          height={80}
        />
      </Link>

      <ul className={`${style["ul"]} text-sm font-light`}>
        {HEADER_DATA.english.headerLinks.map((item) => {
          return (
            <li className={style["li"]} key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <Link href={HEADER_DATA.english.ctaButton.link}>
        {" "}
        <button className={style.cta}>
          {HEADER_DATA.english.ctaButton.title}
        </button>
      </Link>
    </header>
  );
};

export default Header;
