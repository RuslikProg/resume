import API_URL from '../constants/index';

export async function getData() {
  const res = await fetch(API_URL)
 
  return res?.json();
}
