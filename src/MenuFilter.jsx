import { useState } from 'react';

export default function MenuFilter() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Menu Filter Component</h2>

      {/* Added accessible label */}
      <label htmlFor="search">Search Menu Items:</label>
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search menu items..."
      />

      {/* Temporary debug display */}
      <p>Current Search Query: {searchQuery}</p>
    </div>
  );
}