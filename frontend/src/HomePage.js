import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [animations, setAnimations] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/animations/search?term=${searchTerm}`);
            setAnimations(response.data);
        } catch (error) {
            console.error('Error fetching animations:', error);
        }
    };

    return (
        <div>
            <h1>Welcome to Our Animation Platform</h1>
            <Link to="/manage-animations" style={{ padding: '10px', color: 'blue' }}>Manage Animations</Link>

            {/* Search input and button */}
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search animations"
                    style={{ margin: '10px', padding: '5px' }}
                />
                <button onClick={handleSearch} style={{ padding: '5px 10px' }}>Search</button>
            </div>

            {/* Display search results */}
            <div>
                {animations.map(anim => (
                    <div key={anim._id}>
                        <p>{anim.name}</p>
                        <button onClick={() => window.open(`http://localhost:4000/api/animations/download/${anim._id}`, '_blank')}>Download</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;