import React from "react";
import "../assets/css/bookingForm.scss";

const BookingForm = () => {
  return (
    <div className="booking_form">
      <h1 className="title">Reserva</h1>
      <form className="booking_cells" action="procesar_reserva" method="POST">
        <label htmlFor="fecha">Fecha:</label>
        <input className="cell" type="date" id="fecha" name="fecha" required />

        <label htmlFor="hora">Hora:</label>
        <input className="cell" type="time" id="hora" name="hora" />

        <label htmlFor="personas">Personas:</label>
        <select className="cell" id="personas" name="personas" required>
          <option value="1">1 persona</option>
          <option value="2">2 personas</option>
          <option value="3">3 personas</option>
          <option value="4">4 personas</option>
          <option value="5">5 personas</option>
          <option value="6">6 personas</option>
          <option value="7">7 personas</option>
          <option value="8">8 personas</option>
          <option value="9">9 personas</option>
          <option value="10">10 personas</option>
          <option value="11">11 personas</option>
          <option value="12">12 personas</option>
          <option value="13">13 personas</option>
          <option value="14">14 personas</option>
          <option value="15">15 personas</option>
        </select>

        <input type="submit" value="Hacer Reserva" />
      </form>
    </div>
  );
};

export default BookingForm;
