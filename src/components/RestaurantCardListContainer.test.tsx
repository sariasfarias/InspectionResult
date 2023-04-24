import { render, screen, fireEvent } from '@testing-library/react';
import { RestaurantCardListContainer } from './RestaurantListContainer';

describe('RestaurantCardListContainer', () => {
    
    const restaurantData = {
        restaurantName: 'Test Restaurant 1',
        restaurantDescription: 'Test Description 1',
        restaurantCity: 'Test City 1',
        restaurantZipCode: '12345',
        restaurantInspectionResult: 'Pass',
        restaurantInspectionDate: '2022-03-15T13:30:00.000Z',
    };

    const props = {
        restaurantCardList: Array(16).fill(restaurantData),
      };

  it('should a paginated message', () => {
    render(<RestaurantCardListContainer {...props} />);
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
  });
  it('should disable prev button at beginning', () => {
    render(<RestaurantCardListContainer {...props} />);
    const prevButton = screen.getByText('Prev');
    expect(prevButton).toHaveProperty('disabled', true);
  });
  it('should enable next button at beginning', () => {
    render(<RestaurantCardListContainer {...props} />);
    const nextButton = screen.getByText('Next');
    expect(nextButton).toHaveProperty('disabled', false);
  });
  it('should enable prev button when clicking Next', () => {
    render(<RestaurantCardListContainer {...props} />);
    const nextButton = screen.getByText('Next');
    nextButton.click();
    expect(nextButton).toHaveProperty('disabled', false);
  });
});
