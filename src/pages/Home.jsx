import { useState, useEffect } from 'react';
import { tarotService } from '../services/api';
import Card from '../components/Card/Card';

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

  if (loading) return <div className="text-center p-8">Cargando cartas...</div>;
  if (error) return <div className="text-center p-8 text-red-400">{error}</div>;

  return (
    <div>
      <h2 className="font-title text-3xl text-center mb-8">Explora las Cartas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            isRevealed={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;