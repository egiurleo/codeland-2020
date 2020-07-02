import fs from "fs";
import path from "path";
import Layout from "../components/Layout";

export default function Home({ staffList }) {
  return (
    <Layout>
      <div className="description">
        <p>Welcome to "Your First Open Source Contribution" 👋</p>
        <p>
          This workshop is part of the{" "}
          <a
            href="https://codelandconf.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Codeland 2020
          </a>{" "}
          conference. The goal of this workshop is to teach people how to create
          issues and submit pull requests to open source repositories. As part
          of this workshop, ever attendee will create their own participants
          page. Check them out below!
        </p>

        {staffList.length === 0 ? (
          <div className="no-contributors">
            🙀 There haven't been any contributors yet!
          </div>
        ) : (
          <>
            <p>Here's a list of people who have contributed to this site:</p>

            <ul>
              {staffList.map((name) => {
                const capitalizedName =
                  name.charAt(0).toUpperCase() + name.slice(1);
                return (
                  <li>
                    <a href={`/participants/${name}`}>{capitalizedName}</a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>

      <style jsx>{`
        .description {
          flex: 1;
          padding: 2rem;
          font-size: 1.25rem;
          max-width: 60rem;
        }

        .description p {
          margin-bottom: 2rem;
          line-height: 1.75rem;
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

const staffDirectory = path.join(process.cwd(), "pages/participants");

export async function getStaticProps() {
  const fileNames = fs.readdirSync(staffDirectory);

  return {
    props: {
      staffList: fileNames.map((fileName) => fileName.split(".")[0]),
    },
  };
}
