import Layout from '../../components/Layout'
import About from '../../components/About'

function Martino() {
  return (
    <Layout>
      <About
        name='Martino Fenu'
        imageUrl='https://libreshot.com/wp-content/uploads/2018/08/cat-portrait-861x574.jpg'
        description='Hi, my name is Martino! I work with React, and I live in Sardinia! The image is from https://libreshot.com'
      />
    </Layout>
  )
}

export default Martino;