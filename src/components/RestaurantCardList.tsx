import { IRestaurantCardList } from "../types";
import { RestaurantCard } from "./RestaurantCard";

export function RestaurantCardList(props:IRestaurantCardList){
    return (
        <div>
            {
                props.restaurantCardList.map((restaurant, index) => 
                    <RestaurantCard
                        key={index}
                        restaurantName={restaurant.restaurantName}
                        restaurantDescription={restaurant.restaurantDescription}
                        restaurantCity={restaurant.restaurantCity}
                        restaurantZipCode={restaurant.restaurantZipCode}
                        restaurantInspectionResult={restaurant.restaurantInspectionResult}
                        restaurantInspectionDate={restaurant.restaurantInspectionDate}
                    />
                )
            }
        </div>
    );
}