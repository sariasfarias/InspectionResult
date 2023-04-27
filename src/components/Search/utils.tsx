export const setNewQueryParam = (
    searchTags: string[][],
    setQueryParam: Function
) => {
    let textQueryParam = searchTags.length > 0 ? '?' : "";
    for (let i = 0; i < searchTags.length; i++){
        if (i > 0){
            textQueryParam+= '&';
        }
        textQueryParam += searchTags[i][0]+'='+encodeURIComponent(searchTags[i][1]);
    }
    setQueryParam( textQueryParam);
};

export const removeTag = ( 
    index: number,
    searchTags: string[][],
    setSearchTags: Function,
) => {
    let auxTags = searchTags;
    auxTags.splice(index, 1);
    setSearchTags(auxTags);
};


export const addTag = (
    searchTags: string[][],
    selectionValue: string,
    searchText: string,
    setSearchTags: Function,
) => {
    let auxTags = searchTags;
    auxTags.push([selectionValue, searchText]);
    setSearchTags(auxTags);
}
