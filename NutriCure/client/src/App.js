import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import IngredientsList from './components/IngredientsList';
import IngredientDetails from './components/IngredientDetails';
import AddIngredient from './components/AddIngredient';
import EditIngredient from './components/EditIngredient';
import UserStoriesList from './components/UserStoriesList';
import StoryDetails from './components/StoryDetails';
import AddStory from './components/AddStory';
import EditStory from './components/EditStory';
import ArticlesList from './components/ArticlesList';
import ArticleDetails from './components/ArticleDetails';
import CommunityPostsList from './components/CommunityPostsList';
import PostDetails from './components/PostDetails';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import AddComment from './components/AddComment';
import EditComment from './components/EditComment';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🍃NutriCure🍃 ⚠️under contruction⚠️</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ingredients" element={<IngredientsList />} />
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="/ingredients/new" element={<AddIngredient />} />
        <Route path="/ingredients/:id/edit" element={<EditIngredient />} />
        <Route path="/stories" element={<UserStoriesList />} />
        <Route path="/stories/:id" element={<StoryDetails />} />
        <Route path="/stories/new" element={<AddStory />} />
        <Route path="/stories/:id/edit" element={<EditStory />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/community" element={<CommunityPostsList />} />
        <Route path="/community/:id" element={<PostDetails />} />
        <Route path="/community/new" element={<AddPost />} />
        <Route path="/community/:id/edit" element={<EditPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/comment/new" element={<AddComment />} />
        <Route path="/comment/:id/edit" element={<EditComment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

