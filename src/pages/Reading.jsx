import { useState, useEffect } from 'react';
import { tarotService } from '../services/api';
import Card from '../components/Card/Card';

const Reading = () => {
  const [allCards, setAllCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const positions = ['Pasado', 'Presente', 'Futuro'];

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const cardsData = await tarotService.getAllCards();
        setAllCards(cardsData);
      } catch (err) {
        setError('Error al cargar las cartas');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleCardSelect = (card) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const resetReading = () => {
    setSelectedCards([]);
    setShowResults(false);
  };

  const startReading = () => {
    if (selectedCards.length === 3) {
      setShowResults(true);
    }
  };

  if (loading) return <div className="text-center p-8">Cargando cartas...</div>;
  if (error) return <div className="text-center p-8 text-red-400">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-title text-4xl mb-4">Lectura de Tres Cartas</h1>
        <p className="text-lg mb-6">
          Selecciona exactamente 3 cartas para descubrir tu pasado, presente y futuro
        </p>
        <p className="text-sm opacity-75">
          Cartas seleccionadas: {selectedCards.length}/3
        </p>
      </div>

      {!showResults ? (
        <div>
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              {positions.map((position, index) => (
                <div key={position} className="text-center">
                  <h3 className="font-title text-xl mb-3">{position}</h3>
                  <div className="aspect-[2/3] bg-gray-200 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center">
                    {selectedCards[index] ? (
                      <Card card={selectedCards[index]} isRevealed={false} />
                    ) : (
                      <span className="text-gray-500">Selecciona una carta</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center space-x-4">
              <button
                onClick={startReading}
                disabled={selectedCards.length !== 3}
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Revelar Lectura
              </button>
              <button
                onClick={resetReading}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Reiniciar
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-title text-2xl text-center mb-6">Elige tus cartas</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allCards.map(card => {
                const isSelected = selectedCards.find(c => c.id === card.id);
                const canSelect = selectedCards.length < 3;
                
                return (
                  <div 
                    key={card.id}
                    className={`relative ${isSelected ? 'opacity-50' : canSelect ? 'cursor-pointer' : 'opacity-30 cursor-not-allowed'}`}
                    onClick={() => canSelect && !isSelected && handleCardSelect(card)}
                  >
                    <Card card={card} isRevealed={false} />
                    {isSelected && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <span className="text-white font-bold">SELECCIONADA</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-title text-3xl text-center mb-8">Tu Lectura</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {selectedCards.map((card, index) => (
              <div key={card.id} className="text-center">
                <h3 className="font-title text-2xl mb-4 text-yellow-600">{positions[index]}</h3>
                <div className="mb-4">
                  <Card card={card} isRevealed={true} />
                </div>
                <div className="text-left bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-title text-lg mb-2 text-gray-800">{card.arcaneName}</h4>
                  <p className="text-sm mb-3 text-gray-700">{card.arcaneDescription}</p>
                  <h5 className="font-semibold mb-1 text-gray-800">Pionera: {card.goddessName}</h5>
                  <p className="text-xs text-gray-600">{card.goddessDescription.substring(0, 150)}...</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={resetReading}
              className="px-8 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Nueva Lectura
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reading;