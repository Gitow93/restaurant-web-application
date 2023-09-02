import React from "react";
import restaurantsInfo from "../assets/mocks/restaurants.json";
import RestaurantCard from "./RestaurantCard";
import "../assets/css/restaurantList.scss";

const RestaurantList = () => {
  return (
    <>
      <h1>Nuestros restaurantes</h1>
      <div className="restaurant_info">
        {restaurantsInfo.restaurantes.map((restaurant) => (
          <RestaurantCard restaurantInfo={restaurant} />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
