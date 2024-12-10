import React from 'react';
import './RecipeCard.css';

function RecipeCard({ name, cuisine, image, description }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={`${name}`} className="recipe-image" />
      <h2 className="recipe-name">{name}</h2>
      <h3 className="recipe-cuisine">Cuisine: {cuisine}</h3>
      <p className="recipe-description">{description}</p>
    </div>
  );
}

export default RecipeCard;
