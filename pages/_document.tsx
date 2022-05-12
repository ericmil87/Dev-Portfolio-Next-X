import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-sky-900 to-cyan-900 dark:from-dark-500 dark:to-dark-700 dark:text-white background-animate">
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
