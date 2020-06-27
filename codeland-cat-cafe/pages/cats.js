import Layout from "../components/Layout";
import faker from "faker";

function Cats() {
  const cats = [
    {
      name: faker.name.firstName(),
      image: faker.image.cats(),
    },
    {
      name: faker.name.firstName(),
      image: faker.image.cats(),
    },
    {
      name: "Antoni",
    },
  ];

  return (
    <div className="container">
      <Layout route="cats">
        <div className="grid">
          {[1, 2, 3, 4, 5, 6].map((_) => {
            debugger;
            return (
              <div className="cat">
                <h3>{faker.name.firstName()}</h3>
                <img src={faker.image.cats(null, null, true)} />
                <div className="likes-and-dislikes">
                  <p>Likes: {faker.random.word()}</p>
                  <p>Disikes: {faker.random.word()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>

      <style jsx>
        {`
          .grid {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            flex: 1;
            padding: 2rem;
          }

          .cat {
            width: 25rem;
            padding: 1.5rem;
            text-align: left;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            margin-bottom: 2rem;

            display: flex;
            flex-direction: column;
          }

          .cat h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .cat p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .cat img {
            width: 20rem;
          }

          .cat .likes-and-dislikes {
            margin-top: .5rem;
          }
        `}
      </style>

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

export default Cats;
