import { useEffect, useState } from "react";
import { getRestaurantsInformation } from "../Api";
import { IRestaurantCard } from "../types";
import { RestaurantListPagination } from "./RestaurantListPagination";

export function HomePage(){
  const [data, setData] = useState<IRestaurantCard[]>([]);
  useEffect(() => {
    getRestaurantsInformation({setData});
  },[]);
  
  const errorMessage = (
    <h1>No restaurants to show</h1>
  );
  
  return (
    <div >
      { data.length !== 0 
        ? <RestaurantListPagination restaurantCardList={data}/>
        : errorMessage
      }
    </div>
  );
};