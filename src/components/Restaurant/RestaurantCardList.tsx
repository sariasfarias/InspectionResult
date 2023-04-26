import { IRestaurantCardList } from "../../types";
import { RestaurantCard } from "./RestaurantCard";

export function RestaurantCardList(props:IRestaurantCardList){
    return (
        <div>
            {
                props.restaurantCardList.map((restaurant, index) => 
                    <RestaurantCard
                        key={index}
                        name={restaurant.name}
                        description={restaurant.description}
                        city={restaurant.city}
                        zip_code={restaurant.zip_code}
                        inspection_result={restaurant.inspection_result}
                        inspection_date={restaurant.inspection_date}
                    />
                )
            }
        </div>
    );
}