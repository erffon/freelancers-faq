import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface ILayout {
  hasHeader?: boolean;
  hasFooter?: boolean;
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({
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
      {hasHeader && <Header className={inter.className} />}
      <main>{children}</main>
      {hasFooter && <Footer />}
    </>
  );
};

export default Layout;
