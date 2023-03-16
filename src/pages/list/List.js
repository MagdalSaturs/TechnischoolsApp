import React from "react";
import "./List.scss";

const List = () => {
    return (
        <div>
            <h1>Lista przedmiotów</h1>
            <div class="container">
                <img src="https://cdn.todamateria.com/imagenes/historia-og.jpg" alt="Historia" class="image" />
                <a href="/history" class="test">
                    <div class="overlay">
                        <div class="text" href="/history">Historia</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default List;