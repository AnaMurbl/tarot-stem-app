import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tarotService } from '../services/api';

const CardDetailPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        setLoading(true);
        const cardData = await tarotService.getCardById(id);
        setCard(cardData);
      } catch (err) {
        setError('Error al cargar la carta');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCard();
    }
  }, [id]);

  if (loading) return <div className="text-center p-8">Cargando carta...</div>;
  if (error) return <div className="text-center p-8 text-red-400">{error}</div>;
  if (!card) return <div className="text-center p-8">Carta no encontrada</div>;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Botón volver */}
      <Link 
        to="/" 
        className="inline-block mb-6 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
      >
        ← Volver a las cartas
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Imagen de la carta */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <img 
              src={card.arcaneImage.imageSrc} 
              alt={card.arcaneName}
              className="w-full rounded-lg shadow-xl border-2 border-yellow-600"
            />
            <div className="mt-4 text-center">
              <h1 className="font-title text-3xl mb-2">{card.arcaneName}</h1>
              <p className="text-lg">Arcano {card.arcaneNumber}</p>
            </div>
          </div>
        </div>

        {/* Información de la diosa STEM */}
        <div className="space-y-6">
          <div>
            <h2 className="font-title text-2xl mb-4">Diosa Contemporánea</h2>
            <div className="flex items-center mb-4">
              <img 
                src={card.goddessImage.imageSrc} 
                alt={card.goddessName}
                className="w-24 h-24 rounded-full mr-4 border-2 border-yellow-600"
              />
              <h3 className="font-title text-xl">{card.goddessName}</h3>
            </div>
            <p className="text-base leading-relaxed mb-4">{card.goddessDescription}</p>
          </div>

          <div>
            <h3 className="font-title text-xl mb-3">Significado del Arcano</h3>
            <p className="text-base leading-relaxed">{card.arcaneDescription}</p>
          </div>

          {/* Créditos */}
          <div className="text-sm opacity-75 border-t pt-4">
            <p>Imagen del arcano: {card.arcaneImage.author}</p>
            <p>Imagen de la pionera: {card.goddessImage.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;