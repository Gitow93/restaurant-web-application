import React, { useState } from "react";
import "../assets/css/infoContent.scss"

const InfoContent = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <p>
        ¡Bienvenido a nuestro rincón gastronómico! En nuestro sitio
        web, te invitamos a embarcarte en un viaje culinario que te llevará a
        descubrir una amplia variedad de restaurantes, desde los rincones más
        acogedores hasta los destinos más exquisitos.
      </p>
      {!showMore && (
        <button onClick={toggleShowMore} className="btn">
          Show More
        </button>
      )}
      {showMore && (
        <>
          <p>
            ¿Te apetece un sushi fresco y delicioso? ¿O quizás una auténtica
            pizza italiana con todos tus ingredientes favoritos? No importa cuál
            sea tu antojo, aquí encontrarás un abanico de opciones para
            satisfacer tus papilas gustativas. Nuestro catálogo de restaurantes
            está diseñado pensando en ti, ofreciéndote una selección diversa que
            abarca desde la cocina local hasta platos internacionales que te
            harán viajar sin salir de tu hogar.
          </p>
          <p>
            Sabemos que la elección de un lugar para comer puede ser una tarea
            difícil, pero estamos aquí para hacerte la vida más fácil. ¡Así que
            adelante, explora nuestro catálogo y déjate llevar por el sabor! Ya
            sea una ocasión especial, una reunión con amigos o simplemente un
            antojo repentino, estamos seguros de que encontrarás algo que te haga
            sonreír.
          </p>
          <p>
            Gracias por visitarnos y ser parte de nuestra comunidad de amantes de
            la buena comida. Estamos aquí para hacer que tus experiencias
            culinarias sean memorables y deliciosas. ¡Buen provecho!
          </p>
          <button onClick={toggleShowMore} className="btn">
            Show Less
          </button>
        </>
      )}
    </div>
  );
};

export default InfoContent;