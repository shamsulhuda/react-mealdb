import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Restaurant() {
  const mealData = useLoaderData();
  console.log(mealData.meals);
  return (
    <div>
      <div className="restaurant-list">
        <div className="container m-auto grid grid-cols-4 gap-3">
          {mealData.meals.map((meal) => (
            <div key={meal.idMeal}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/restaurant/${meal.idMeal}`}>
                  <img
                    className="rounded-t-lg"
                    src={meal.strMealThumb}
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {meal.strMeal}
                    </h5>
                  </a>

                  <Link
                    to={`/restaurant/${meal.idMeal}`}
                    className="inline-flex items-center justify-between py-2 px-4 bg-sky-700 text-white rounded-md w-full"
                  >
                    Details
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
