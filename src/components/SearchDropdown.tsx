import { ISearchDropdown } from "../types";
import './SearchDropdown.scss'

export function SearchDropdown (props:ISearchDropdown){
    return (
        <div className="dropdown">
            <div className="dropdown-text" onClick={() => props.setShowListOptions(!props.showListOptions)}>  
                <div>Filter:</div>
                <div className="dropdown-default-option">
                    {props.selection.label}
                </div>
            </div>
            <div className={"dropdown-list"+ (props.showListOptions ? "-active": "-hidden")}>
                {props.options.map((option, index) => 
                    <div 
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                            props.setSelection(option);
                            props.setShowListOptions(!props.showListOptions)
                        }}
                    >
                        {option.label}
                    </div>
                )}
            </div>
        </div>
    );
}