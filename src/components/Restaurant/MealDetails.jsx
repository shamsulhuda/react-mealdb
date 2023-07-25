import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function MealDetails() {
  const mealData = useLoaderData();
  const { strMeal, strCategory, strMealThumb } = mealData.meals[0];
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div className="image">
            <img src={strMealThumb} className="rounded rounded-r-md"></img>
          </div>
          <div className="details">
            <h2 className="title text-2xl">Title: {strMeal}</h2>
            <p>Category: {strCategory}</p>
            <button
              className="px-3 py-2 bg-sky-800 rounded-md text-white my-4"
              onClick={() => handleBack()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
