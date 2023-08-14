import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import Head from "next/head";

interface ILayout {
  children?: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Head>
        <title>DevsEnv Next Movies...</title>
        <meta name="description" content="DevsEnv tutorials" />
        <meta name="keyword" content="DevsEnv, tutorials" />
      </Head>

      {/* <Script
            src="https://code.jquery.com/jquery-3.6.4.min.js"
        /> */}

      <div className="flex bg-[#0C0C0C] text-primary font-sans">
        {/* Sidebar */}
        <Sidebar />

        <div className="container mx-auto">
          {/* Header or Navbar */}
          <Header />

          {/* Content */}
          <div className="py-6 px-10">
            {children}

            <div className="mt-10">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
