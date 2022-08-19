import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <title>Eric Milfont Full Stack Web Developer Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:title"
            content="Eric Milfont Full Stack Web Developer Portfolio"
            key="title"
          />

          <meta charSet="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <meta
            name="keywords"
            content="eric,milfont,ericmilfont,eric milfont,full stack developer, nextjs developer, php developer, api developer, web developer, freelancer developer, react developer, blitzjs developer"
          ></meta>
          <meta
            name="description"
            content="Do you need a brand new Website or WebApp? Hi! I'm Eric Milfont, Senior Full Stack Web Developer with more than 20 years of experience. I can develop and guarantee high availability of your digital products. Get in touch."
          ></meta>
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-sky-900 to-cyan-900 dark:from-dark-500 dark:to-dark-700 dark:text-white background-animate 	">
          <ul className="circles">
            <li key="1"></li>
            <li key="2"></li>
            <li key="3"></li>
            <li key="4"></li>
            <li key="5"></li>
            <li key="6"></li>
            <li key="7"></li>
            <li key="8"></li>
            <li key="9"></li>
            <li key="10"></li>
          </ul>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
