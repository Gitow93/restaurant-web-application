import React, { useState, useEffect } from "react";
import restaurantsInfo from "../assets/mocks/restaurants.json";
import "../assets/css/restaurantList.scss"



const RestaurantList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <h1>Nuestros restaurantes</h1>
    <div className="restaurant_info">
      {restaurantsInfo.restaurantes.map((restaurant) => (
        <div className="restaurant" key={restaurant.id}>
          <h2>{restaurant.nombre}</h2>
          <img className="restaurant_picture" src={restaurant.foto_restaurante} />
          {windowWidth > 500 ? (
            <>
              <img className="food_picture" src={restaurant.foto_comida} />
              <p>Localización: {restaurant.localizacion}</p>
              <p>Tipo de comida: {restaurant.tipo_comida}</p>
              <p>Descripción: {restaurant.descripcion}</p>
              <p>Contacto: {restaurant.contacto}</p>
              <p>Valoración: {restaurant.valoracion}</p>
              <p>Horario:</p>
              <ul>
                {Object.entries(restaurant.horario).map(([dia, horario]) => (
                  <li key={dia}>
                    {dia}: {horario}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      ))}
    </div>
    </>
  );
};
      

export default RestaurantList;