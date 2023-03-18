import React from "react";

const BiologyCirculatorySystem = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="menu">
        <button onClick={goBack}>Powrót</button>
      </div>
      <h1>Układ Krwionośny, limfatyczny, odpornościowy</h1>
    </div>
  );
};

export default BiologyCirculatorySystem;
