import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";

function Staff() {
  return (
    <Layout title={"Staff"}>
      <Grid>
        <Card
          name={"Emily Giurleo"}
          image={
            "https://previews.dropbox.com/p/thumb/AA323giz0uFncrCOWngJ0YArrkIecH0UfK878gj5Hfd60pAtu49gyXDzFf3_IO2ZIQ1z4lxOPMfD3-z1jfC1De_hhZVyoYRbPkzkbN6enq9wFkBn4F1Ed0z4xJhbJBidy7BRTTec9--eV5j4dZRjGECH7yjYJE6NHsjsKZAFSicTGDmhRmzdZGAsvDNBPrXQjHKl4c3pGhANVunoNYxsjtYMDsFIMMW5tOpb3NCBffRfaZr-mutsym7n58WuR-gUo7SuYe6I0S6mXGWlS-nhCMZWtr6LPwzNVdT_PwMjlWXcMGatw_2eGNyPCqympY_NVRR5iB9YB_UfsLAwYpF4rntkgWSwsdmZeAsM6AzxqBPnEA/p.jpeg?fv_content=true&size_mode=5"
          }
        >
          My name is Emily Giurleo, and I'm the leader of this workshop! I love
          software and cats, and I'm so excited to share this workshop with you!
        </Card>
      </Grid>
    </Layout>
  );
}

export default Staff;
