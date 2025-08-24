import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative py-8">
        {/* Decoración dorada sutil */}
        <div className="absolute inset-0 border-b border-warm-gold/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <nav className="flex justify-center gap-8 mb-6">
            <Link 
              to="/" 
              className="text-cream hover:text-light-gold transition-colors duration-300 text-lg tracking-wide"
            >
              Inicio
            </Link>
            <Link 
              to="/reading" 
              className="text-cream hover:text-light-gold transition-colors duration-300 text-lg tracking-wide"
            >
              Lectura
            </Link>
          </nav>
          
          {/* Título con marco dorado elegante */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 border-2 border-warm-gold/30 rounded-lg transform rotate-1"></div>
              <div className="absolute inset-0 border border-light-gold/20 rounded-lg transform -rotate-1"></div>
              <h1 className="font-title text-5xl md:text-6xl text-warm-gold relative z-10 px-8 py-4">
                FemStem Tarot
              </h1>
            </div>
            <p className="text-body text-cream/80 mt-4 max-w-2xl mx-auto">
              Descubre las historias de las pioneras que transformaron la ciencia y la tecnología
            </p>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="border-t border-warm-gold/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mb-4"></div>
          <p className="text-cream/60 text-sm">
            Creado en colaboración con FactoriaF5 Barcelona
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;