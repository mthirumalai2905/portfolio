import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import week from './img/week.svg';
import month from './img/month.svg';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS if not using CDN
import arrow from './img/arrow.webp'; // Your arrow image

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTv, setShowTv] = useState(false); // State to toggle the visibility of the TV container

  // Fetching Pokémon data
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500'); // Fetching data for 100 Pokémon
        const data = await response.json();
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: pokemon.name,
              sprite: details.sprites.versions['generation-v']['black-white'].animated.front_default, // Use animated sprites
            };
          })
        );
        setPokemons(pokemonData); // Set the fetched Pokémon data
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pokemons.length); // Loop through Pokémon
  };

  const toggleTvVisibility = () => {
    setShowTv(!showTv); // Toggle TV container visibility
  };

  return (
    <div className="main">
      <Header />
      <Navbar />

      {/* Medals at the top right corner */}
      <img src={week} alt="Medal" className="medal" />
      <img src={month} alt="Medal" className="medal2" />
      <img src={week} alt="Medal" className="medal3" />

      {/* Pokéball button to toggle TV container */}
      <button 
        onClick={toggleTvVisibility} 
        className={`pokeball-button ${showTv ? 'no-bounce' : ''}`} // Add the 'no-bounce' class if showTv is true
      >
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Pokéball" />
      </button>

      {/* TV-like container with images, shown only if showTv is true */}
      {showTv && (
        <div className="tv-container">
          <div className="tv-screen">
            {pokemons.length > 0 && (
              <div className="pokemon-container">
                {/* Displaying Pokémon animated sprite */}
                <img 
                  src={pokemons[currentImageIndex].sprite} 
                  alt={pokemons[currentImageIndex].name} 
                  className="pokemon-image" 
                />
                <p>{pokemons[currentImageIndex].name}</p>
              </div>
            )}
          </div>

          {/* Next arrow button to navigate to the next Pokémon */}
          <div className="next-arrow-container">
            <button className="next-arrow-button" onClick={nextImage}>
              Next
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
