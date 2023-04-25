export interface IRestaurantCard {
    name: string;
    description: string;
    city: string;
    zip_code: string;
    inspection_result: string;
    inspection_date: string;
}

export interface IRestaurantCardList {
    restaurantCardList: IRestaurantCard[];
}