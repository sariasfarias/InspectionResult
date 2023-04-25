import { useEffect, useState } from "react";
import { IRestaurantCard } from "./types";

interface IGetRestaurantsInformation {
    setData:any
}

export const getRestaurantsInformation = async (props: IGetRestaurantsInformation) : Promise<void> => {

    try {
        const apiResponse = await fetch('https://data.kingcounty.gov/resource/f29f-zza5.json');
        const json = await apiResponse.json();
        props.setData(json);
    } catch (error) {
        props.setData([]);
    }

}