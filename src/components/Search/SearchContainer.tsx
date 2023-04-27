import { useEffect, useState } from 'react';
import { ISearchContainer } from '../../types';
import { FilterTags } from './FilterTags';
import { SearchBar } from './SearchBar';
import './SearchContainer.scss';
import { SearchDropdown } from './SearchDropdown';

export function SearchContainer (props:ISearchContainer){
    const options = [
        { value: "name",label: "Name"},
        { value: "zip_code", label: "Zip Code"},
        { value: "inspection_result", label: "Inspection Result"},
    ];
    const [searchTags, setSearchTags] = useState<string[][]>([]);
    const [selection, setSelection] = useState({value: "all", label: "All"});
    const [showListOptions, setShowListOptions] = useState(false);
    
    useEffect(() => {
        setSelection(options[0]);
      }, []
    );

    return (
        <>
        <div className="search-container">
            <SearchBar 
                setData={props.setData} 
                selection={selection}  
                searchTags={searchTags} 
                setSearchTags={setSearchTags}
                setQueryParam={props.setQueryParam}/>
            <SearchDropdown 
                options={options} 
                selection={selection} 
                setSelection={setSelection} 
                showListOptions={showListOptions} 
                setShowListOptions={setShowListOptions} />
        </div>
        <div className='search-tags'>
            <FilterTags 
                searchTags={searchTags} 
                setSearchTags={setSearchTags} 
                setQueryParam={props.setQueryParam}
            />
        </div>
        </>
    );
}