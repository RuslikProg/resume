import Layout from '../components/Layout';
// import {getData} from '../utils/fetch';
import {cvData} from '../public/data/inform';

const Home = ()=>{
  console.log(cvData)
  return (
    <Layout data={cvData}/>
  );
}

export default Home;