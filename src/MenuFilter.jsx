import React, { useState, useEffect, useMemo } from 'react';
import './MenuFilter.css';

const MenuFilter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts'];
    const menuItems = [
        { id: 1, name: 'Spring Rolls', category: 'Appetizers' },
        { id: 2, name: 'Grilled Chicken', category: 'Main Courses' },
        { id: 3, name: 'Chocolate Cake', category: 'Desserts' },
        { id: 4, name: 'Caesar Salad', category: 'Appetizers' },
        { id: 5, name: 'Pasta Primavera', category: 'Main Courses' },
        { id: 6, name: 'Ice Cream', category: 'Desserts' },
    ];

    // Load data from localStorage on mount
    useEffect(() => {
        const savedSearchQuery = localStorage.getItem('searchQuery');
        const savedCategory = localStorage.getItem('selectedCategory');
        if (savedSearchQuery) setSearchQuery(savedSearchQuery);
        if (savedCategory) setSelectedCategory(savedCategory);
    }, []);

    // Save data to localStorage on change
    useEffect(() => {
        localStorage.setItem('searchQuery', searchQuery);
        localStorage.setItem('selectedCategory', selectedCategory);
    }, [searchQuery, selectedCategory]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = useMemo(() => {
        return menuItems.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory, menuItems]);

    return (
        <div className="container">
            <h2>Menu Filter Component</h2>
            <label htmlFor="search">Search Menu Items:</label>
            <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search menu items..."
                aria-label="Search menu items"
            />
            <h3>Filter by Category:</h3>
            <div>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        style={{
                            backgroundColor: selectedCategory === category ? '#ddd' : '#007bff',
                            color: selectedCategory === category ? '#333' : '#fff',
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <h3>Menu Items:</h3>
            {filteredItems.length === 0 ? (
                <p>No items found.</p>
            ) : (
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MenuFilter;