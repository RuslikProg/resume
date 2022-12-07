import Layout from '../components/Layout';
import {getData} from '../utils/fetch';

  function Home({data}) {

  return (
    <Layout data={data}/>
  )
}

export async function getStaticProps() {
  const data = await getData()
  return {
    props: {
      data,
    },
  }
};

export default Home;