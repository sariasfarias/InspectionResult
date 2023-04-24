export interface IRestaurantCard {
    restaurantName: string;
    restaurantDescription: string;
    restaurantCity: string;
    restaurantZipCode: string;
    restaurantInspectionResult: string;
    restaurantInspectionDate: string;
}

export interface IRestaurantCardList {
    restaurantCardList: IRestaurantCard[];
}