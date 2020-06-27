import Header from "./Header";
import Footer from "./Footer";

function Layout({ route, children }) {
  return (
    <main>
      <Header route={route}/>
      {children}
      <Footer />

      <style jsx>{`
        main {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

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
      `}</style>
    </main>
  );
}

export default Layout;
