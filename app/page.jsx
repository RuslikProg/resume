import Layout from '../components/Layout';
// import {getData} from '../utils/fetch';
import {cvData} from '../public/data/inform';

const Home = ()=>{
  return (
    <Layout data={cvData}/>
  );
}

export default Home;