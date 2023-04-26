import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { getRestaurantsInformation } from '../../Api';
import userEvent from '@testing-library/user-event';

const mockSetSearchText = jest.fn();
const mockSetData = jest.fn();
const mockSetQueryParam = jest.fn();

jest.mock('../../Api', () => ({
  getRestaurantsInformation: jest.fn()
}));

describe('SearchBar', () => {
  it('renders the component', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchText="searchText"
      />
    );

    const inputElement = screen.getByPlaceholderText('Search...');
    const buttonElement = screen.getByRole('button');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls setSearchText function on input change', () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchText=""
      />
    );

    fireEvent.change(getByPlaceholderText("Search..."), {
        target: { value: "New search text" }
      });

    expect(mockSetSearchText).toHaveBeenCalledWith('New search text');
  });

  it('set queryParam on button click', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchText="searchText"
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockSetQueryParam).toHaveBeenCalledWith('?name=searchText');
  });
  it('setSearchText to All with All filter and random text on button click', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'All', value: 'all' }}
        searchText="searchText"
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockSetSearchText).toHaveBeenCalledWith('All');
  });
  it('should setQueryParam with All filter on button click', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'All', value: 'all' }}
        searchText="searchText"
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockSetQueryParam).toHaveBeenCalled();
    expect(mockSetSearchText).toHaveBeenCalledWith('All');
  });
  it('should not setQueryParam if All filter if All filter was used before', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'All', value: 'all' }}
        searchText="All"
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockSetQueryParam).not.toHaveBeenCalled();
  });
  it('should transform string with special characters to set queryParam', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchText="#807 TUTTA BELLA"
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockSetQueryParam).toHaveBeenCalledWith('?name=%23807%20TUTTA%20BELLA');
  });
  it('should set QueryParam if Enter button is pressed', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        setQueryParam={mockSetQueryParam}
        selection={{ label: 'Name', value: 'name' }}
        searchText="#807 TUTTA BELLA"
      />
    );

    const inputElement = screen.getByPlaceholderText("Search...");
    userEvent.type(inputElement, "{enter}");
    expect(mockSetQueryParam).toHaveBeenCalledWith('?name=%23807%20TUTTA%20BELLA');
  });
});
