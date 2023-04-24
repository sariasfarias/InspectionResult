import { IRestaurantCard } from '../types';
import './RestaurantCard.scss';

export function RestaurantCard(props:IRestaurantCard){
  const inspectionClass:string = `restaurant-card__item__${props.restaurantInspectionResult}`;
  const restaurantInspectionDate = props.restaurantInspectionDate.split('T')[0];
  
  return (
    <div className='restaurant-card'>
      <div className='restaurant-card__header'>
        <div className='restaurant-card__name'> {props.restaurantName} </div>
        <div className='restaurant-card__description'> {props.restaurantDescription} </div>
      </div>
      <div className='restaurant-card__info'>
        <div className='restaurant-card__item'> City: {props.restaurantCity}</div>
        <div className='restaurant-card__item'> Zip Code: {props.restaurantZipCode}</div>
        <div className='restaurant-card__item'> 
          Inspection Result: <div className={inspectionClass}> {props.restaurantInspectionResult}</div>
        </div>
        <div className='restaurant-card__item'> Inspection Date: {restaurantInspectionDate}</div>
      </div>
    </div>
  )
}

