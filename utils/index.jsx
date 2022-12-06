export const starsGerenerator = (count) => Array.from(Array(count).fill(null));

const fetchData = async () => {
  const response = await fetch("http://localhost:3000/api/information",{
    cache: 'force-cache'
  })
  return await response.json();
}
export default fetchData;

