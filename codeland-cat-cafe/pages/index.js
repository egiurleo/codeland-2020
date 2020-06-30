import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="description">
        <p>Welcome to the Codeland Cat Cafe site! 👋</p>
        <p>
          This site was built as part of a workshop called "Your First Open
          Source Contribution" for the{" "}
          <a
            href="https://codelandconf.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Codeland 2020
          </a>{" "}
          conference.
        </p>

        <p>
          Click here to view the{" "}
          <a
            href="https://docs.google.com/presentation/d/1nGELytl08YFVrcH4bfWQIzooOBrak28-xOrEKNC0SwI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            workshop slides
          </a>
          .
        </p>
      </div>
      <style jsx>{`
        .description {
          flex: 1;
          padding: 2rem;
          font-size: 1.25rem;
          // max-width: 52rem;
        }

        .description a {
          text-decoration: underline;
        }

        .description a:hover {
          color: #ff8dce;
        }
      `}</style>
    </Layout>
  );
}
