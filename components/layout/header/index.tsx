import Image from "next/image";
import logo from "../../../public/assets/images/Iran.svg";
import { HEADER_DATA } from "../../../contents/layout/header/headerData";
import Link from "next/link";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={`_container ${style["container"]}`}>
      <div>
        <Image src={logo} alt={"Iran's logo"} />
      </div>
      <ul className={`${style["ul"]}`}>
        {HEADER_DATA.english.headerLinks.map((item) => {
          return (
            <Link href={item.link}>
              <li key={item.title}>{item.title}</li>
            </Link>
          );
        })}
      </ul>
      <button></button>
    </header>
  );
};

export default Header;
