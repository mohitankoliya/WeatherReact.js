import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setWeathers } from "../redux/actions/weatherActions";
import ProductComponent from "./WeatherComponent";

const WeatherPage = () => {
  const weather = useSelector((state) => state.allWeather.weather);
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://mocki.io/v1/e37e3ef0-31dd-4e8a-9763-1844a6daced0")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setWeathers(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", weather);
  return (
    <div className="container">
      <ProductComponent />
    </div>
  );
};

export default WeatherPage;
