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

export interface ISearchBox{
    data: IRestaurantCard[];
    setData: Function;
    options: TSearchOption[];
    selection: TSearchOption;
    setSelection: Function;
    searchText: string;
    setSearchText: Function
}

export interface ISearchContainer{
    data: IRestaurantCard[];
    setData: Function;
}

type TSearchOption = {
    value: string; 
    label: string;
}

export interface ISearchDropdown{
    options: TSearchOption[];
    selection: TSearchOption;
    setSelection: Function;
    showListOptions: boolean;
    setShowListOptions: Function
}
