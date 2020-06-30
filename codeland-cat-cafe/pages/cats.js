import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";
import cats from "../cats";

function Cats() {
  return (
    <Layout route="cats" title="Cats">
      <Grid>
        {cats.map((cat) => (
          <Card name={cat.name} image={cat.image}>
            <p>Likes: {cat.likes}</p>
            <p>Dislikes: {cat.dislikes}</p>
          </Card>
        ))}
      </Grid>
    </Layout>
  );
}

export default Cats;
