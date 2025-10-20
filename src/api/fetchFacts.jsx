export const fetchEcoFacts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('Failed to fetch facts');
    return res.json();
  } catch (error) {
    throw error;
  }
};
