import { useEffect, useState } from "react";
import { getRestaurantsInformation } from "../Api";
import { IRestaurantCard } from "../types";
import { RestaurantListPagination } from "./Restaurant/RestaurantListPagination";
import { SearchContainer } from "./Search/SearchContainer";
import "./HomePage.scss";
import { Chart } from "./Chart/Chart";

export function HomePage(){
  const [data, setData] = useState<IRestaurantCard[]>([]);
  
  useEffect(() => {
    getRestaurantsInformation(setData);
  },[]);
  
  const errorMessage = (
    <h1>No results to display</h1>
  );

  return (
    <>
      <h1>Socrata API with Data Visualizations</h1>
      <div className="container">
        <div className="container__graphic-information">
          <Chart data={data}/>
        </div>
        <div className="container__list-information">
          <SearchContainer data={data} setData={setData} />
          { data.length !== 0 
            ? <RestaurantListPagination restaurantCardList={data}/>
            : errorMessage
          }
        </div>
      </div>
    </>
  );
};