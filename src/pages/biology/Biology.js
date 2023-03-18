import React from "react";
import "./Biology.scss";

const Biology = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="menu">
        <button onClick={goBack}>Powrót</button>
      </div>
      <h1>Biologia</h1>
      <div className="container">
        <img
          src="https://img.wprost.pl/img/uklad-krwionosny/7f/31/344e4276a426bb36a2d1c57df856.jpeg"
          alt="Układ Krwionośny, limfatyczny, odpornościowy"
          class="image"
        />
        <a href="/biology/circulatory/system" class="test">
          <div class="overlay">
            <div class="text">
              Układ Krwionośny, limfatyczny,
              <br /> odpornościowy
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Biology;
