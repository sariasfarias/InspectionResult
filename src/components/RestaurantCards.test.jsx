import { render, screen } from '@testing-library/react';
import { RestaurantCard } from './RestaurantCard';

describe('RestaurantCard', () => {
  it('should render restaurant name and description', () => {
    const props = {
      restaurantName: 'Test Restaurant',
      restaurantDescription: 'Test Description',
      restaurantCity: 'Test City',
      restaurantZipCode: '12345',
      restaurantInspectionResult: 'Pass',
      restaurantInspectionDate: '2022-03-15T13:30:00.000Z',
    };
    render(<RestaurantCard {...props} />);
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should render restaurant location information', () => {
    const props = {
      restaurantName: 'Test Restaurant',
      restaurantDescription: 'Test Description',
      restaurantCity: 'Test City',
      restaurantZipCode: '12345',
      restaurantInspectionResult: 'Pass',
      restaurantInspectionDate: '2022-03-15T13:30:00.000Z',
    };
    render(<RestaurantCard {...props} />);
    expect(screen.getByText('City: Test City')).toBeInTheDocument();
    expect(screen.getByText('Zip Code: 12345')).toBeInTheDocument();
  });

  it('should render restaurant inspection information', () => {
    const props = {
      restaurantName: 'Test Restaurant',
      restaurantDescription: 'Test Description',
      restaurantCity: 'Test City',
      restaurantZipCode: '12345',
      restaurantInspectionResult: 'Unsatisfactory',
      restaurantInspectionDate: '2022-03-15T13:30:00.000Z',
    };
    render(<RestaurantCard {...props} />);
    expect(screen.getByText('Inspection Result:')).toBeInTheDocument();
    expect(screen.getByText('Unsatisfactory')).toBeInTheDocument();
    expect(screen.getByText('Inspection Date: 2022-03-15')).toBeInTheDocument();
  });
});
