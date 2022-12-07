import Layout from '../components/Layout';
import {getData} from '../utils/fetch';

const Home = async()=>{
  
  const data = await getData();

  return (
    <Layout data={data}/>
  );
}

export default Home;