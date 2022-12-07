export const starsGerenerator = (count) => Array.from(Array(count).fill(null));


import API_URL from '../constants/index';
export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch(API_URL)
  const data = await res?.json()

  return data;
}

