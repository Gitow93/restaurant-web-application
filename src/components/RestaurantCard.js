import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";

const RestaurantCard = (props) => {
  const restaurant = props.restaurantInfo;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth <= 500) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="restaurant" key={restaurant.id}>
      <h2>{restaurant.nombre}</h2>
      <img
        className="restaurant_picture"
        src={restaurant.foto_restaurante}
        alt={restaurant.descripcion}
      />
      <p className="description_container">{restaurant.descripcion}</p>

      <div className="content_wrapper">
        {showContent || windowWidth > 500 ? (
          <>
            <div className="info_container">
              <div className="i__container">
                <p className="info_title">Localización:</p>
                <p> {restaurant.localizacion}</p>
              </div>
              <div className="i__container">
                <p className="info_title">Tipo de comida: </p>
                <p>{restaurant.tipo_comida}</p>
              </div>
              <div className="i__container">
                <p className="info_title">Contacto:</p>
                <p> {restaurant.contacto}</p>
              </div>
              <div className="i__container">
                <p className="info_title">Valoración:</p>
                <p> {restaurant.valoracion}</p>
              </div>
            </div>
            <div className="schedule">
              <p className="info_title">Horario:</p>
              <ul>
                {Object.entries(restaurant.horario).map(([dia, horario]) => (
                  <li key={dia}>
                    {dia}: {horario}
                  </li>
                ))}
              </ul>
            </div>
            <BookingForm />
          </>
        ) : null}

        {windowWidth <= 500 && (
          <button className="info_btn" onClick={toggleContent}>
            {showContent ? "View Less " : "View More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
