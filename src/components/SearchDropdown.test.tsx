import { render, fireEvent } from '@testing-library/react';
import { SearchDropdown } from './SearchDropdown';

const options = [
    {value: "all", label: "All"},
    { value: "name", label: "c"},
    { value: "zip_code", label: "Zip Code" },
    { value: "inspection_result", label: "Inspection Result" },
];

const setShowListOptions = jest.fn();
const setSelection = jest.fn();

describe('SearchDropdown', () => {
  test('renders default option', () => {
    const showListOptions = false;
    const selection = options[0];

    const { getByText, getAllByText } = render(
      <SearchDropdown
        options={options}
        setShowListOptions={setShowListOptions}
        setSelection={setSelection}
        showListOptions={showListOptions}
        selection={selection}
      />
    );

    const filterText = getByText('Filter:');
    expect(filterText).toBeInTheDocument();
    
    const defaultOption = getAllByText('All');
    expect(defaultOption.length).toBe(2);
  });
  test('toggles list of options with setShowListOptions', () => {
    const showListOptions = false;
    const selection = options[0];

    const { getByText } = render(
      <SearchDropdown
        options={options}
        setShowListOptions={setShowListOptions}
        setSelection={setSelection}
        showListOptions={showListOptions}
        selection={selection}
      />
    );

    const filterText = getByText('Filter:');
    filterText.click();

    
    expect(setShowListOptions).toHaveBeenCalledWith(true);

  });
});
