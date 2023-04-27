import { setNewQueryParam, removeTag, addTag } from './utils';

const setSearchTags = jest.fn();
const mockSetQueryParam = jest.fn();

describe('setNewQueryParam', () => {
    beforeEach(() => { jest.clearAllMocks()});
    
    it('returns an empty string if no search tags are provided', () => {
        const result = setNewQueryParam([], mockSetQueryParam);
        expect(result).toBeUndefined();
    });

    it('returns a query string with one search tag', () => {
        const result = setNewQueryParam([['zip_code', '98105']], mockSetQueryParam);
        expect(mockSetQueryParam).toHaveBeenCalledWith('?zip_code=98105');
    });

    it('returns a query string with multiple search tags', () => {
        const result = setNewQueryParam([
        ['name', 'MAS CAFE'],
        ['zip_code', '98105'],
        ['inspection_result', 'Satisfactory'],
        ], mockSetQueryParam);
        expect(mockSetQueryParam).toHaveBeenCalledWith('?name=MAS%20CAFE&zip_code=98105&inspection_result=Satisfactory');
    });
});

describe('removeTag', () => {
    beforeEach(() => { jest.clearAllMocks()});
    it('removes the tag at the specified index', () => {
        const searchTags = [
            ['name', 'MAS CAFE'],
            ['zip_code', '98105'],
            ['inspection_result', 'Satisfactory'],
        ];
        removeTag(1, searchTags, setSearchTags);
        expect(setSearchTags).toHaveBeenCalledWith([
            ['name', 'MAS CAFE'],
            ['inspection_result', 'Satisfactory'],
        ]);
    });
});

describe('addTag', () => {
    beforeEach(() => { jest.clearAllMocks()});
    it('adds a new tag to the search tags', () => {
        const searchTags = [['name', 'MAS CAFE']];
        addTag(searchTags, 'zip_code', '98105', setSearchTags);
        expect(setSearchTags).toHaveBeenCalledWith([
            ['name', 'MAS CAFE'],
            ['zip_code', '98105'],
        ]);
    });
});
