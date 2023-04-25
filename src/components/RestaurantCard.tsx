import { IRestaurantCard } from '../types';
import './RestaurantCard.scss';

export function RestaurantCard(props:IRestaurantCard){
  const inspectionClass:string = `restaurant-card__item__${props.inspection_result}`;
  const restaurantInspectionDate = props.inspection_date.split('T')[0];
  
  return (
    <div className='restaurant-card'>
      <div className='restaurant-card__header'>
        <div className='restaurant-card__name'> {props.name} </div>
        <div className='restaurant-card__description'> {props.description} </div>
      </div>
      <div className='restaurant-card__info'>
        <div className='restaurant-card__item'> City: {props.city}</div>
        <div className='restaurant-card__item'> Zip Code: {props.zip_code}</div>
        <div className='restaurant-card__item'> 
          Inspection Result: <div className={inspectionClass}> {props.inspection_result}</div>
        </div>
        <div className='restaurant-card__item'> Inspection Date: {restaurantInspectionDate}</div>
      </div>
    </div>
  )
}

