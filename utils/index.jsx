export const starsGerenerator = (count) => Array.from(Array(count).fill(null));

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/information')
  const data = await res.json()

  return data;
}

