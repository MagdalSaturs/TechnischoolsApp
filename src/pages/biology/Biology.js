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
          src="https://api.new.buki.org.pl/news_image/u1/FC/u1FCMRkw1Sh8rfKkvui7AQdBKdEW2gh8j2uyfZRq.jpg"
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
