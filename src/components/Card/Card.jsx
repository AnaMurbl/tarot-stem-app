import { Link } from 'react-router-dom';

function Card({ card, isRevealed = false, onClick }) {
  return (
    <Link 
      to={`/card/${card.id}`}
      className="w-full max-w-xs mx-auto cursor-pointer transition-all duration-300 hover:scale-105 block"
    >
      <div className="aspect-[2/3] relative">
        {isRevealed ? (
          // Frente - información de la carta
          <div className="bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg shadow-xl p-4 h-full border border-yellow-600">
            <img 
              src={card.arcaneImage.imageSrc} 
              alt={card.arcaneName}
              className="w-full h-2/3 object-cover rounded-md mb-3"
            />
            <h3 className="font-title text-lg text-purple-900 text-center mb-1">
              {card.arcaneName}
            </h3>
            <p className="text-sm text-purple-700 text-center">
              Arcano {card.arcaneNumber}
            </p>
          </div>
        ) : (
          // Dorso - tu imagen del reverso
          <div className="rounded-lg shadow-xl h-full overflow-hidden">
            <img 
              src="/images/card-back.png" 
              alt="Reverso de carta FemStem Tarot"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </Link>
  );
}

export default Card;