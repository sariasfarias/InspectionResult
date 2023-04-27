import { useEffect, useState } from "react";
import { IRestaurantCardList } from "../../types";
import { RestaurantCardList } from "./RestaurantCardList";
import './RestaurantListPagination.scss';

export function RestaurantListPagination(props:IRestaurantCardList){
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageNumberLimit = 10;
    const isDisabledNextButton = () => currentPage >= totalPages;
    const isDisabledPrevButton = () => currentPage === 1;

    useEffect(() => {
        setTotalPages(
            Math.ceil(props.restaurantCardList.length / pageNumberLimit )
        );
        setCurrentPage(1);
    },[props.restaurantCardList]);

    const itemFrom = (currentPage-1) * pageNumberLimit;
    const itemTo = (currentPage * pageNumberLimit)-1;
    const restaurantListToDisplay =props.restaurantCardList.slice(itemFrom, itemTo);
    
    return (
        <div>
            <RestaurantCardList restaurantCardList={restaurantListToDisplay}/>
            {totalPages >1 && <div>
                <button 
                    className="pagination__button"
                    onClick={()=> {
                        setCurrentPage(currentPage-1);
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                    disabled={isDisabledPrevButton()}
                >
                    Prev
                </button>
                <button 
                    className="pagination__button"
                    onClick={()=> {
                        setCurrentPage(currentPage+1);
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                    disabled={isDisabledNextButton()}
                >
                    Next
                </button>

            </div>}
            <p>Page {currentPage} of {totalPages}</p>
        </div>
    );
}