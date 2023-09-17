import React from 'react'
import useRecipes from '../hooks/useRecipes'
import { Category } from './CategoryGrid';
import { GameQuery } from '../App';

interface Props{
    category: Category; 
    gameQuery: GameQuery;
}
const RecipeGrid = ({category, gameQuery}:Props) => {

    const {recipes, error} = useRecipes(gameQuery);

    
  return (
    <div>RecipeGrid</div>
  )
}

export default RecipeGrid