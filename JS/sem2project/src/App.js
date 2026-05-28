// src/App.js

import './App.css';

import wwe from './assets/WWE 2K25.jpg';
import detroit from './assets/Detroit Become Human.jpg';
import gta from './assets/GTA 5.jpg';
import cyberpunk from './assets/CYBERPUNK 2077.jpg';
import rdr2 from './assets/Rdr 2.jpg';
import spiderman from './assets/Spiderman remastered.jpg';
import tombraider from './assets/TOMB RAIDER.jpg';
import gow from './assets/god-of-war-ragnaroek-4k-gaming-poster_bWtpbG2UmZqaraWkpJRobWllrWdma2U.jpg';
import re3 from './assets/Resident evil 3.jpg';
import tlou from './assets/images (1).jpg';
import uncharted from './assets/Uncharted.png';
import cod from './assets/Call of duty.jpg';

function App() {

  const games = [
    {
      title: "WWE 2K25",
      image: wwe,
      price: "Free",
      free: true
    },
    {
      title: "Detroit Become Human",
      image: detroit,
      price: "₹1149"
    },
    {
      title: "GTA V",
      image: gta,
      price: "₹1500"
    },
    {
      title: "Cyberpunk 2077",
      image: cyberpunk,
      price: "₹2000"
    },
    {
      title: "Red Dead Redemption 2",
      image: rdr2,
      price: "₹2000"
    },
    {
      title: "Spiderman",
      image: spiderman,
      price: "₹1300"
    },
    {
      title: "Tomb Raider",
      image: tombraider,
      price: "₹1100"
    },
    {
      title: "God of War",
      image: gow,
      price: "₹1400"
    },
    {
      title: "Resident Evil 3",
      image: re3,
      price: "₹1750"
    },
    {
      title: "The Last of Us",
      image: tlou,
      price: "Free",
      free: true
    },
    {
      title: "Uncharted",
      image: uncharted,
      price: "₹1200"
    },
    {
      title: "COD: Warfare",
      image: cod,
      price: "Free",
      free: true
    }
  ];

  return (
    <div>

      <header className="navbar">
        <div className="logo">EPIC GAMES</div>

        <nav>
          <a href="/">Store</a>
          <a href="/">News</a>
          <a href="/">FAQ</a>
          <a href="/">Help</a>
        </nav>

        <button className="download-btn">Download</button>
      </header>


      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Games</h1>

          <p>
            Play exclusive PC games and get free games every week.
          </p>

          <button className="hero-btn">
            Browse Store
          </button>
        </div>
      </section>


      <section className="games">

        <h2>Featured Games</h2>

        <div className="game-grid">

          {games.map((game, index) => (

            <div className="game-card" key={index}>

              <img src={game.image} alt={game.title} />

              <h3>{game.title}</h3>

              <p className={game.free ? "price free" : "price"}>
                {game.price}
              </p>

            </div>

          ))}

        </div>

      </section>


      <footer>
        <p>© 2025 Epic Games Clone. Only for project.</p>
      </footer>

    </div>
  );
}

export default App;