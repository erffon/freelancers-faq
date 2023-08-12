import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

interface ILayout {
  className?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({
  className = "",
  hasFooter = true,
  hasHeader = true,
  children,
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      {hasHeader && <Header />}
      <main>{children}</main>
      {hasFooter && <Footer />}
    </>
  );
};

export default Layout;
