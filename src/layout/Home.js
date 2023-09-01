import React from "react";
import "../assets/css/home.scss";
import Header from "../components/Header";
import InfoContent from "../components/InfoContent";
import RestaurantList from "./RestaurantList";
import Footer from "../components/Footer";



const Home = () => {
    return (
        <>
        <Header />
        <InfoContent />
        <RestaurantList />
        <Footer />
        </>
    );
}

export default Home;