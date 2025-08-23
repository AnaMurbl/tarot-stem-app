import { useState, useEffect } from 'react';
import { tarotService } from '../services/api';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const cardsData = await tarotService.getAllCards();
        setCards(cardsData);
      } catch (err) {
        setError('Error al cargar las cartas');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <div className="text-center p-8">🔮 Cargando cartas...</div>;
  if (error) return <div className="text-center p-8 text-red-500">❌ {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Todas las Cartas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map(card => (
          <div key={card.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">{card.arcaneName}</h3>
            <p className="text-sm text-gray-600">Arcano: {card.arcaneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;