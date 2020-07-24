import Layout from "../../components/Layout";
import About from "../../components/About";

function Caleb() {
  return (
    <Layout>
      <About
        name={<a href="https://caleb.biz">Caleb Aviles</a>}
        imageUrl="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
        description="Hey, there! My name is Caleb and I'm a Full Stack Software Engineer. I love writing RoR, JavaScript HTML, and CSS."
      />
      
    </Layout>
  );
}

export default Caleb;