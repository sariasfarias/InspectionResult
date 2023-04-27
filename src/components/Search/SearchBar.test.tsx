import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import userEvent from '@testing-library/user-event';

const mockSetSearchTags = jest.fn();
const mockSetData = jest.fn();
const mockSetQueryParam = jest.fn();

jest.mock('../../Api', () => ({
  getRestaurantsInformation: jest.fn()
}));

describe('SearchBar', () => {
  it('renders the component', () => {
    render(
      <SearchBar
        setSearchTags={mockSetSearchTags}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchTags={[["name","searchText"]]}
      />
    );

    const inputElement = screen.getByPlaceholderText('Search...');
    const buttonElement = screen.getByRole('button');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
  it('should add tag on button click', () => {
    render(
      <SearchBar
        setSearchTags={mockSetSearchTags}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchTags={[]}
      />
    );
    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, {
      target: { value: "searchText" }
    });

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockSetSearchTags).toHaveBeenCalledWith([['name', 'searchText']]);
  });

  it('should set queryParam on button click', () => {
    render(
      <SearchBar
        setSearchTags={mockSetSearchTags}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchTags={[]}
      />
    );
    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, {
      target: { value: "searchText" }
    });

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockSetQueryParam).toHaveBeenCalledWith('?name=searchText');
  });
  it('should transform string with special characters to set queryParam', () => {
    render(
      <SearchBar
        setSearchTags={mockSetSearchTags}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchTags={[]}
      />
    );

    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, {
      target: { value: "#807 TUTTA BELLA" }
    });

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockSetQueryParam).toHaveBeenCalledWith('?name=%23807%20TUTTA%20BELLA');
  });
  it('should set QueryParam if Enter button is pressed', () => {
    render(
      <SearchBar
        setSearchTags={mockSetSearchTags}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchTags={[]}
      />
    );

    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, {
      target: { value: "#807 TUTTA BELLA" }
    });
    userEvent.type(inputElement, "{enter}");
    expect(mockSetQueryParam).toHaveBeenCalledWith('?name=%23807%20TUTTA%20BELLA');
  });
});
