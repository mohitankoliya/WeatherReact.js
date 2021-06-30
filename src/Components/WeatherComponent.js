import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allWeather.weather);
  const renderList = products.map((weather) => {
    const { id, image, city, season, temperature, temperature_c } = weather;
    return (
      <>
        <div key={id} class="card" style={{ width: "25rem" }}>
          <div className="image">
            <img
              className="card-img-top"
              src={image}
              alt="Card_image"
              style={{ width: "100%" }}
            />
            <div className="temp">
              <h2>{season}</h2>
              <h1>{temperature}</h1>
            </div>
          </div>
          <button className="btn btn1">
            <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
          </button>
          <button className="btn btn2">
            <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
          </button>
          <div class="card-body">
            <div className="info">
              <h6>{city}</h6>
              <h6>{temperature_c}</h6>
            </div>
            <hr />
            <div className="info">
              <h6>{city}</h6>
              <h6>{temperature_c}</h6>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
