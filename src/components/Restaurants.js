import React from "react";
import restaurantsInfo from "../assets/mocks/restaurants.json";



const RestaurantList = () => {
    return (
        <div className="restaurant_info">
          {restaurantsInfo.restaurantes.map((restaurant) => (
            <div key={restaurant.id}>
              <h2>{restaurant.nombre}</h2>
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
            </div>
          ))}
        </div>
      );
}
      

export default RestaurantList;