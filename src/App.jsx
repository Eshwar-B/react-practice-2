import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import './App.css';
import NavigationBar from './sections/navigationBar';

function App() {
  const [err, setErr] = useState('');
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();

      if (data?.recipes?.length > 0) {
        setRecipes(data.recipes);
      } else {
        setErr('No recipes found.');
      }
    } catch (error) {
      setErr('Failed to fetch recipes. Please try again later.');
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="app">
      <header>
        <NavigationBar />
      </header>
      
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            cuisine={recipe.cuisine}
            image={recipe.image}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
