import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-purple-100">
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-center gap-4 mb-4">
            <Link to="/" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              Inicio
            </Link>
            <Link to="/reading" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              Lectura
            </Link>
          </nav>
          
          <h1 className="font-title text-4xl md:text-5xl font-normal text-center text-white drop-shadow-lg">
            FemStem Tarot
          </h1>
          <p className="text-center text-purple-100 mt-2 text-lg">
            Descubre mediante el tarot a las mujeres influyentes de la ciencia y la tecnología.
          </p>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-purple-800 text-white text-center py-6">
        <p className="text-purple-200">
          Creado en colaboración con FactoriaF5 Barcelona
        </p>
      </footer>
    </div>
  );
}

export default App;