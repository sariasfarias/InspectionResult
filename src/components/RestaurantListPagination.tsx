import { useState } from "react";
import { IRestaurantCardList } from "../types";
import { RestaurantCardList } from "./RestaurantCardList";
import './RestaurantListPagination.scss';

export function RestaurantListPagination(props:IRestaurantCardList){
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumberLimit = 10;
    const totalPages = Math.ceil(props.restaurantCardList.length / pageNumberLimit ) ;
    const isDisabledNextButton = () => currentPage >= totalPages;
    const isDisabledPrevButton = () => currentPage === 1;

    const itemFrom = (currentPage-1) * pageNumberLimit;
    const itemTo = (currentPage * pageNumberLimit)-1;
    const restaurantListToDisplay =props.restaurantCardList.slice(itemFrom, itemTo);
    
    return (
        <div>
            <RestaurantCardList restaurantCardList={restaurantListToDisplay}/>
            <div>
                <button 
                    className="pagination__button"
                    onClick={()=> setCurrentPage(currentPage-1)}
                    disabled={isDisabledPrevButton()}
                >
                    Prev
                </button>
                <button 
                    className="pagination__button"
                    onClick={()=> setCurrentPage(currentPage+1)}
                    disabled={isDisabledNextButton()}
                >
                    Next
                </button>

            </div>
            <p>Page {currentPage} of {totalPages}</p>
        </div>
    );
}