import "@/styles/globals.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Head from "next/head";
import { parseCookies } from "nookies";
import { Router } from "next/router";
import React, { Fragment, ReactElement, ReactNode, useEffect } from "react";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "@/store";
import "antd/dist/reset.css"; // use reset.css for AntD v5+
// import 'antd/dist/antd.min.css';
import { createCache, StyleProvider } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { renderToString } from "react-dom/server";
import { ThemeProvider } from "next-themes";
import { HOMEPAGE } from "@/utils/content";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  access_token: string;
  user_info: any;
  category_list: any;
  signInPrivacy: string;
  userType: string;
};
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
const MyApp = ({ Component, pageProps, ...props }: AppPropsWithLayout) => {
  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/admin");
  const getLayout = Component.getLayout ?? ((page) => page);
  const cache = React.useMemo<Entity>(() => createCache(), []);

  useEffect(() => {
    // Initialize any global animations or scripts
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      if (animatedElements) {
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <Fragment>
      <ThemeProvider attribute="class">
        <StyleProvider cache={cache}>
          <Provider store={store}>
            {isAdminRoute ? (
              <Head>
                <meta name="robots" content="noindex, nofollow" />
              </Head>
            ) : (
              <Head>
                <title>Infinite Outsourcing System</title>
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={HOMEPAGE.heading} />
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/treeflex/dist/css/treeflex.css"
                ></link>
                {/* <link rel="icon" href="public%favicon.ico" /> */}
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

                {/* <style jsx global>{`
      * {
        font-family: ${montserrat.style.fontFamily} !important; 
      }
    `}</style> */}
              </Head>
            )}
            <Script id="my-script" strategy="lazyOnload">
              {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FVXPLF125R', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-FVXPLF125R"
            ></Script>
            <Script
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBioMK31w2-759jRzfev6Tpkdj9pe2eKrw"
              async
              defer
            ></Script>
            {getLayout(
              <>
                <Component {...pageProps} />
                {/* <ScrollToTop /> */}
                <ToastContainer />
              </>
            )}
          </Provider>
        </StyleProvider>
      </ThemeProvider>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </Fragment>
  );
};

export default MyApp;
