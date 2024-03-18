import "./assets/css/style.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import GamesList from "./components/games/gameslist";
function App() {
  return (
    <div>
      <Header />
      <GamesList />
      <Footer />
    </div>
  );
}

export default App;
