import Layout from "../components/Layout";
import cats from "../cats";

function Cats() {
  return (
    <Layout route="cats" title="Cats">
      <div className="grid">
        {cats.map((cat) => {
          return (
            <div className="cat">
              <h3>{cat.name}</h3>
              <img src={cat.image} />
              <div className="likes-and-dislikes">
                <p>Likes: {cat.likes}</p>
                <p>Disikes: {cat.dislikes}</p>
              </div>
            </div>
          );
        })}
      </div>
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
            margin-top: 0.5rem;
          }
        `}
      </style>
    </Layout>
  );
}

export default Cats;
