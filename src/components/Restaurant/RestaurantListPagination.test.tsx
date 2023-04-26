import { render, screen } from '@testing-library/react';
import { RestaurantListPagination } from './RestaurantListPagination';

describe('RestaurantListPagination', () => {
    
    const restaurantData = {
        name: 'Test Restaurant 1',
        description: 'Test Description 1',
        city: 'Test City 1',
        zip_code: '12345',
        inspection_result: 'Pass',
        inspection_date: '2022-03-15T13:30:00.000Z',
    };

    const props = {
        restaurantCardList: Array(16).fill(restaurantData),
      };

  it('should show a correct paginated message', () => {
    render(<RestaurantListPagination {...props} />);
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
  });
  it('should disable prev button at beginning', () => {
    render(<RestaurantListPagination {...props} />);
    const prevButton = screen.getByText('Prev');
    expect(prevButton).toHaveProperty('disabled', true);
  });
  it('should enable next button at beginning', () => {
    render(<RestaurantListPagination {...props} />);
    const nextButton = screen.getByText('Next');
    expect(nextButton).toHaveProperty('disabled', false);
  });
});
