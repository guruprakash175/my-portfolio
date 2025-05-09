// File: pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Meta tags */}
          <meta
            name="description"
            content="Professional portfolio of a web developer and cybersecurity specialist"
          />
          <meta
            name="keywords"
            content="web development, cybersecurity, portfolio, ethical hacking, React, Next.js"
          />
          <meta name="author" content="Your Name" />

          {/* Favicon */}
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
