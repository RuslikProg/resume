import Layout from '../components/Layout';
import {loadPosts} from '../utils/index';

 function Home({data}) {

  return (
    <Layout data={data}/>
  )
}

export async function getStaticProps() {
  const data = await loadPosts();
  return {
    props: {
      data
    },
  }
};

export default Home;