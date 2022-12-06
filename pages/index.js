import Layout from '../components/Layout';

export default function Home({data}) {

  return (
    <Layout data={data}/>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/information");
  const data = await  res.json();

  return {
    props: {
      data,
    },
  }
};