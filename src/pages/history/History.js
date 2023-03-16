import React from "react";
import "./History.scss";

const History = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div>
            <div className="menu">
                <button onClick={goBack}>Powrót</button>
            </div>
            <h1>History</h1>
            <div class="container">
                <img src="https://cdn.todamateria.com/imagenes/historia-og.jpg" alt="Historia" class="image" />
                <a href="/history/xviiw" class="overlay">
                    <div class="overlay">
                        <div class="text">Polska XVII wiek</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default History;