import { useEffect, useState } from 'react';
import { ISearchContainer } from '../types';
import { SearchBar } from './SearchBar';
import './SearchContainer.scss';
import { SearchDropdown } from './SearchDropdown';

export function SearchContainer (props:ISearchContainer){
    const options = [
        {
            value: "all",
            label: "All",
        },
        {
            value: "name",
            label: "Name",
        },
        {
            value: "zip_code",
            label: "Zip Code",
        },
        {
            value: "inspection_result",
            label: "Inspection Result",
        },
    ];
    const [searchText, setSearchText] = useState("");
    const [selection, setSelection] = useState({value: "all", label: "All"});
    const [showListOptions, setShowListOptions] = useState(false);
    
    useEffect(() => {
        setSelection(options[0]);
      }, []
    );

    return (
        <div className="search-container">
            <SearchBar 
                setData={props.setData} 
                selection={selection}  
                searchText={searchText} 
                setSearchText={setSearchText}/>
            <SearchDropdown 
                options={options} 
                selection={selection} 
                setSelection={setSelection} 
                showListOptions={showListOptions} 
                setShowListOptions={setShowListOptions} />
        </div>
    );
}