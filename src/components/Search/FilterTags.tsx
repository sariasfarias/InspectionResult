import { IFilterTags } from "../../types";
import './FilterTags.scss';
import { removeTag, setNewQueryParam } from "./utils";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function FilterTags (props : IFilterTags) {
    const handleOnClick = (index: number) => {
        removeTag(
            index,
            props.searchTags,
            props.setSearchTags,
        )
        setNewQueryParam(props.searchTags, props.setQueryParam);
    }

    return (
        <div className="tag">
            {props.searchTags.map((tag: any, index:number) => 
                <div 
                    key={index} className="tag__item"
                >
                    <div>{tag[0]+ ' : ' +tag[1]}</div>
                    <button 
                        className="tag__button"
                        onClick={() => handleOnClick(index)}
                    >
                        <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />
                    </button>
                </div>
            )}
        </div>
    );
}