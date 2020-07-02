import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ title, children }) {
  return (
    <div className="container">
      <Head>
        <title>Your First Open Source Contribution</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
      </Head>

      <main>
        <Header title={title} />
        {children}
        <Footer />
      </main>
      <style jsx>{`
        .container {
          flex: 1;
          display: flex;
          width: 100%;
        }

        main {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        
        * {
          box-sizing: border-box;
        }

        #__next {
          height: 100%;
          width: 100%;
          display: flex;
        }
      `}</style>
    </div>
  );
}

export default Layout;
