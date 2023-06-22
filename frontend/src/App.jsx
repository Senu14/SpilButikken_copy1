import Header from './Components/Partials/Header/Header';
import Footer from './Components/Partials/Footer/Footer';
import AppRouter from './App/AppRouter/AppRouter';

function App() {
  return (
    <div className="app">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
