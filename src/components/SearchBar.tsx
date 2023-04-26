import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getRestaurantsInformation } from '../Api';
import { ISearchBox } from '../types';
import './SearchBar.scss';

export function SearchBar (props:ISearchBox){
    const [queryParam, setQueryParam] = useState("");
    

    const handleOnChange = (e: any) => {
        props.setSearchText(e.target.value);
    };

    useEffect(() => {
        getRestaurantsInformation(props.setData, queryParam);
        props.setSearchText(props.selection.label + " : " + props.searchText)
    },[queryParam]);
      
    return (
        <div className="search-bar">
            <input 
                type="text" 
                className="search-bar__input" 
                placeholder="Search..."
                onChange={handleOnChange}
                onClick={() => props.setSearchText("")}
                value={props.searchText}
            />
            <button 
                className="search-bar__button" 
                onClick={() => setQueryParam("?"+ props.selection.value + "=" + props.searchText)}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-bar__icon"/>
            </button>   
        </div>
    );
}