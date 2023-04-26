import { render, screen } from '@testing-library/react';
import { SearchContainer } from './SearchContainer';

describe('SearchContainer', () => {
  it('renders the SearchBar and SearchDropdown components', () => {
    const mockSetData = jest.fn();
    const mockData :any = [];
    render(<SearchContainer data={mockData} setData={mockSetData} />);

    // Check that the SearchBar and SearchDropdown components are present
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Filter:')).toBeInTheDocument();
  });
});
