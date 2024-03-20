import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <header style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Welcome to NutriCure</h1>
                <p>Your resource for nutritional information in cancer care</p>
            </header>

            <section style={{ textAlign: 'center', margin: '20px' }}>
                <h2>Featured Ingredients</h2>
                <p>Discover beneficial ingredients and their effects on health</p>
                <Link to="/ingredients">View Ingredients</Link>
            </section>

            <section style={{ textAlign: 'center', margin: '20px' }}>
                <h2>User Stories</h2>
                <p>Read stories from our community about their experiences</p>
                <Link to="/stories">Read Stories</Link>
            </section>

            <section style={{ textAlign: 'center', margin: '20px' }}>
                <h2>Latest Articles</h2>
                <p>Insights and research articles from experts</p>
                <Link to="/articles">Read Articles</Link>
            </section>
        </div>
    );
};

export default HomePage;
