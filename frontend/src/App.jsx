import Header from './Components/Partials/Header/Header';
import Footer from './Components/Partials/Footer/Footer';
import AppRouter from './App/AppRouter/AppRouter';
import './App.scss'
function App() {
  return (
    // AppRouter component with content the other routes of each page
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
