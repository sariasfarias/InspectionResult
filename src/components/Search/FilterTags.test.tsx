import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterTags } from './FilterTags';
import { removeTag, setNewQueryParam } from './utils';

const mockSetSearchTags = jest.fn();
const mockSetQueryParam = jest.fn();
jest.mock('./utils', () => ({
    removeTag: jest.fn(),
    setNewQueryParam: jest.fn(),
}));

describe('FilterTags', () => {
  const searchTags = [['zip_code', '98105'],['inspection_result', 'Satisfactory'],];
  
  beforeEach(() => { jest.clearAllMocks()});

  test('renders the filter tags', () => {
    render(<FilterTags searchTags={searchTags} setSearchTags={mockSetSearchTags} setQueryParam={mockSetQueryParam} />);
    expect(screen.getByText('zip_code : 98105')).toBeInTheDocument();
    expect(screen.getByText('inspection_result : Satisfactory')).toBeInTheDocument();
  });

  test('calls removeTag and setNewQueryParam when tag button is clicked', () => {
    const index = 1;
    const { container } = render(<FilterTags searchTags={searchTags} setSearchTags={mockSetSearchTags} setQueryParam={mockSetQueryParam} />);
    fireEvent.click(container.querySelectorAll('.tag__button')[index]);
    
    expect(removeTag).toHaveBeenCalledWith(index, searchTags, mockSetSearchTags);
    expect(setNewQueryParam).toHaveBeenCalledWith(searchTags, mockSetQueryParam);
  });
});
