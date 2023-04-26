import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { getRestaurantsInformation } from '../../Api';

const mockSetSearchText = jest.fn();
const mockSetData = jest.fn();

jest.mock('../../Api', () => ({
  getRestaurantsInformation: jest.fn()
}));

describe('SearchBar', () => {
  it('renders the component', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
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
    const { getByPlaceholderText, getByText } = render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        selection={{ label: 'Name', value: 'name' }}
        searchText=""
      />
    );

    fireEvent.change(getByPlaceholderText("Search..."), {
        target: { value: "New search text" }
      });

    expect(mockSetSearchText).toHaveBeenCalledWith('New search text');
  });

  it('calls getRestaurantsInformation function with the correct query parameter on button click', () => {
    render(
      <SearchBar
        setSearchText={mockSetSearchText}
        setData={mockSetData}
        selection={{ label: 'Name', value: 'name' }}
        searchText="searchText"
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(getRestaurantsInformation).toHaveBeenCalledWith(mockSetData, '?name=searchText');
  });
});
