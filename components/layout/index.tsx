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
  pageTitle: string;
  pageDesc: string;
  className?: string;
}

const Layout: React.FC<ILayout> = ({
  hasFooter = true,
  hasHeader = true,
  children,
  pageTitle,
  pageDesc,
  className = "",
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} key="desc" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      {hasHeader && <Header className={inter.className} />}
      <main className={`${inter.className} ${className}`}>{children}</main>
      {hasFooter && <Footer />}
    </>
  );
};

export default Layout;
