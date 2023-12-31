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
    setData: Function;
    selection: TSearchOption;
    searchTags: string[][];
    setSearchTags: Function
    setQueryParam: Function;
}

export interface ISearchContainer{
    data: IRestaurantCard[];
    setData: Function;
    setQueryParam: Function;
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

export interface IChart {
    data: IRestaurantCard[];
}

export interface IFilterTags{
    searchTags: string[][];
    setSearchTags: Function;
    setQueryParam: Function;
}