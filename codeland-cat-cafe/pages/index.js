import Layout from "../components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Codeland Cat Cafe</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
      </Head>

      <Layout>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex
          ligula, tempus eget commodo id, rhoncus vel quam. Cras vel nibh eget
          massa porttitor viverra. Cras consectetur molestie ex, quis euismod
          tellus condimentum at. Nunc facilisis eros nec justo gravida, ut
          dignissim mi laoreet. Donec suscipit faucibus massa ac congue. Mauris
          efficitur aliquam odio, a hendrerit erat commodo sed. Nunc sed velit
          tincidunt, consectetur velit quis, semper felis. Aliquam risus lorem,
          facilisis sed bibendum ac, malesuada quis metus. Suspendisse commodo
          sem metus. Phasellus varius nulla non nisi consequat, vitae convallis
          erat bibendum. Sed pellentesque metus nibh, finibus ullamcorper quam
          varius sed.
        </p>
      </Layout>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.25rem;
          padding: 1rem 2rem;
          flex: 1;
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
      `}</style>
    </div>
  );
}
