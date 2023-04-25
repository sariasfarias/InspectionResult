import { useEffect, useState } from "react";
import { getRestaurantsInformation } from "../Api";
import { IRestaurantCard } from "../types";
import { RestaurantListPagination } from "./RestaurantListPagination";
import { SearchContainer } from "./SearchContainer";

export function HomePage(){
  const [data, setData] = useState<IRestaurantCard[]>([]);
  
  useEffect(() => {
    getRestaurantsInformation(setData);
  },[]);
  
  const errorMessage = (
    <h1>No results to display</h1>
  );

  return (
    <div >
      <SearchContainer data={data} setData={setData} />
      { data.length !== 0 
        ? <RestaurantListPagination restaurantCardList={data}/>
        : errorMessage
      }
    </div>
  );
};