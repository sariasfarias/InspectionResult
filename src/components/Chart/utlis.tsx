import { IRestaurantCard } from "../../types";
import { chartBackgroundColors, chartBorderColors } from "./constants";

export const processData = (data : IRestaurantCard[]) => {
    let inspection_results : any = {};

    data.reduce((acc, item: IRestaurantCard) => {
        inspection_results[item.inspection_result] = inspection_results[item.inspection_result] ? inspection_results[item.inspection_result] + 1 : 1;
        return acc;
    }, inspection_results);

    return inspection_results;
}

export const getLabelInformation = (processedData : any) => {
    const labels = [];
    const labelsData = [];
    const labelsBackgroundColors = [];
    const labelsBorderColors =[];
    
    for( const [key, value] of Object.entries(processedData)) {
        if(key !== 'undefined') {
            labels.push(key);
            labelsData.push(value);
            labelsBackgroundColors.push(chartBackgroundColors[key]);
            labelsBorderColors.push(chartBorderColors[key]);
        }
    }
    
    return [labels, labelsData, labelsBackgroundColors, labelsBorderColors];
}