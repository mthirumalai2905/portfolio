import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import week from './img/week.svg';
import month from './img/month.svg';
import 'font-awesome/css/font-awesome.min.css';
import arrow from './img/arrow.webp';
import Rope from './Rope';
// Import resume as a static import
import resumePDF from './img/Thiru2.pdf';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTv, setShowTv] = useState(false);
  const [isPulled, setIsPulled] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
        const data = await response.json();
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon, index) => {
            try {
              const pokemonResponse = await fetch(pokemon.url);
              const pokemonDetails = await pokemonResponse.json();
              return {
                name: pokemon.name,
                sprite: pokemonDetails.sprites.front_default || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
              };
            } catch (error) {
              console.error(`Error fetching details for ${pokemon.name}:`, error);
              return {
                name: pokemon.name,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
              };
            }
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pokemons.length);
  };

  const toggleTvVisibility = () => {
    setShowTv(!showTv);
  };

  const handlePull = () => {
    setIsPulled(true);
    
    // Create a temporary link to download the resume
    try {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Thiru2.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }

    // Reset rope after animation
    setTimeout(() => {
      setIsPulled(false);
    }, 2000);
  };

  return (
    <div className="main">
      <Header />
      <Navbar />

      {/* Medals section */}
      <div className="medals-container">
        <img src={week} alt="Weekly Medal" className="medal" />
        <img src={month} alt="Monthly Medal" className="medal2" />
        <img src={week} alt="Weekly Medal" className="medal3" />
      </div>

      {/* Pokeball button */}
      <button 
        onClick={toggleTvVisibility}
        className={`pokeball-button ${showTv ? 'no-bounce' : ''}`}
      >
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
          alt="Pokéball" 
        />
      </button>

      {/* TV container */}
      {showTv && (
        <div className="tv-container">
          <div className="tv-screen">
            {pokemons.length > 0 && (
              <div className="pokemon-container">
                <img
                  src={pokemons[currentImageIndex].sprite}
                  alt={pokemons[currentImageIndex].name}
                  className="pokemon-image"
                />
                <p className="pokemon-name">
                  {pokemons[currentImageIndex].name.charAt(0).toUpperCase() + 
                   pokemons[currentImageIndex].name.slice(1)}
                </p>
              </div>
            )}
          </div>
          <div className="next-arrow-container">
            <button 
              className="next-arrow-button" 
              onClick={nextImage}
              aria-label="Next Pokemon"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Rope component */}
      <Rope onPull={handlePull} isPulled={isPulled} />
      
      <Footer />
    </div>
  );
};

export default App;