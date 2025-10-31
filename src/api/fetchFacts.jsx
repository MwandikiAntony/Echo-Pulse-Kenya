export const fetchEcoFacts = async () => {
  try {
    const res = await fetch('https://api.api-ninjas.com/v1/facts?limit=5', {
      headers: {
        'X-Api-Key': 'YOUR_API_KEY' // get one free at api-ninjas.com
      }
    });
    if (!res.ok) throw new Error('Failed to fetch facts');
    return res.json();
  } catch (error) {
    throw error;
  }
};
