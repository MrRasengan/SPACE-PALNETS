import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 8; i++) { // Получаем 8 страниц по 20 персонажей
          promises.push(axios.get(`https://rickandmortyapi.com/api/character?page=${i}`));
        }
        const responses = await Promise.all(promises);
        const allCharacters = responses.flatMap(response => response.data.results);
        setCharacters(allCharacters);
        setFilteredCharacters(allCharacters);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCharacters(filtered);
      setSuggestions(filtered.map(character => character.name));
    } else {
      setFilteredCharacters(characters);
      setSuggestions([]);
    }
  }, [searchTerm, characters]);

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  if (loading) return <h2>Загрузка...</h2>;
  if (error) return <h2>Ошибка: {error}</h2>;

  return (
    <div className="rick-and-morty container">
      <h1>Characters Rick and Morty</h1>
      <p>Using the API</p>
      <input
        type="text"
        placeholder="character search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((name, index) => (
            <li key={index} onClick={() => handleSuggestionClick(name)}>
              {name}
            </li>
          ))}
        </ul>
      )}
      <div className="character-list">
        {filteredCharacters.map(character => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;