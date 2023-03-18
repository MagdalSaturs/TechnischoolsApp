import React from "react";
import "./List.scss";

const List = () => {
  return (
    <div>
      <h1>Lista przedmiotów</h1>
      <div class="container">
        <img
          src="https://cdn.todamateria.com/imagenes/historia-og.jpg"
          alt="Historia"
          class="image"
        />
        <a href="/history" class="test">
          <div class="overlay">
            <div class="text">Historia</div>
          </div>
        </a>
      </div>
      <div className="container">
        <img
          src="https://api.new.buki.org.pl/news_image/u1/FC/u1FCMRkw1Sh8rfKkvui7AQdBKdEW2gh8j2uyfZRq.jpg"
          alt="Biologia"
          class="image"
        />
        <a href="/biology" class="test">
          <div class="overlay">
            <div class="text">Biologia</div>
          </div>
        </a>
      </div>
      <div className="container">
        <img
          src="https://zso2.kartuzy.pl/images/glowne/310-4262.jpg"
          alt="Geografia"
          class="image"
        />
        <a href="/geography" class="test">
          <div class="overlay">
            <div class="text">Geografia</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default List;
