import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISearchBox } from '../../types';
import './SearchBar.scss';

export function SearchBar (props:ISearchBox){
    
    const handleOnChange = (e: any) => {
        props.setSearchText(e.target.value);
    };
    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            handleOnClick();
        }
      };

    const handleOnClick = () => {
        if (props.selection.label === "All"){
            if (props.searchText === "All") return;
            props.setSearchText("All");
            props.setQueryParam("");
            return;
        }
        const queryText = encodeURIComponent(props.searchText)
        props.setSearchText(props.selection.value + " : " + props.searchText);
        props.setQueryParam("?"+ props.selection.value + "=" + queryText);
    }
      
    return (
        <div className="search-bar">
            <input 
                type="text" 
                className="search-bar__input" 
                placeholder="Search..."
                onChange={handleOnChange}
                onKeyDown={handleKeyPress}
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