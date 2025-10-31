import { useEffect, useState } from 'react';
import { fetchEcoFacts } from '../api/ecoFactsApi';

export default function EcoFactsList() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEcoFacts()
      .then(data => setFacts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-green-600">Loading Eco Facts...</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {facts.map(fact => (
        <div key={fact.id} className="p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
          <h3 className="font-semibold text-green-700 mb-2">{fact.title}</h3>
          <p className="text-gray-700 text-sm">{fact.body}</p>
        </div>
      ))}
    </div>
  );
}
