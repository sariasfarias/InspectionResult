import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ISearchBox } from '../../types';
import './SearchBar.scss';
import { addTag, setNewQueryParam } from './utils';

export function SearchBar (props:ISearchBox){
    const [searchText, setSearchText] = useState("");
    
    const handleOnChange = (e: any) => {
        setSearchText(e.target.value);
    };
    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            handleOnClick();
            setSearchText("");
        }
    };

    const handleOnClick = () => {
        addTag(
            props.searchTags,
            props.selection.value,
            searchText,
            props.setSearchTags,
        );
        setNewQueryParam(props.searchTags, props.setQueryParam);
        setSearchText("");
    }

    return (
        <div className="search-bar">
            <input 
                type="text" 
                className="search-bar__input" 
                placeholder="Search..."
                onChange={handleOnChange}
                onKeyDown={handleKeyPress}
                onClick={() => setSearchText("")}
                value={searchText}
            />
            <button 
                className="search-bar__button" 
                onClick={() => handleOnClick()}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-bar__icon"/>
            </button>   
        </div>
    );
}