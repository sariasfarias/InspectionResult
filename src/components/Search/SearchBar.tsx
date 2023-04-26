import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISearchBox } from '../../types';
import './SearchBar.scss';

export function SearchBar (props:ISearchBox){
    
    const handleOnChange = (e: any) => {
        props.setSearchText(e.target.value);
    };

    const handleOnClick = () => {
        if (props.selection.label === "All"){
            if (props.searchText === "All") return;
            props.setSearchText("All");
            props.setQueryParam("");
            return;
        }
        props.setQueryParam("?"+ props.selection.value + "=" + props.searchText);
    }
      
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
                onClick={() => handleOnClick()}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-bar__icon"/>
            </button>   
        </div>
    );
}