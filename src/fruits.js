import { useState } from "react";
function Hooks() {
    const [fruits, ] = useState([
      'Apple',
      'Banana',
      'Cherry', 
      'Fig',
      'Grapes',
      'Lemon',
      'Mango',
      'Orange',
      'Pineapple',
      'Strawberry',
      'Watermelon',
    ]);
  
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFruits, setFilteredFruits] = useState(fruits);
  
    const handleSearchChange = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
      filterFruits(query);
    };
  
    const filterFruits = (query) => {
      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFruits(filtered);
    };
  
    return (
      <div className="App">
        <h1>Fruits Search</h1>
        <input
          type="text"
          placeholder="Search fruits you want"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ul>
          {filteredFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
export default Hooks
