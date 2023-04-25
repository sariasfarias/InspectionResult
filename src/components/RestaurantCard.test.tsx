import { render, screen } from '@testing-library/react';
import { RestaurantCard } from './RestaurantCard';

describe('RestaurantCard', () => {
  const props = {
    name: 'Test Restaurant',
    description: 'Test Description',
    city: 'Test City',
    zip_code: '12345',
    inspection_result: 'Pass',
    inspection_date: '2022-03-15T13:30:00.000Z',
  };

  it('should render restaurant name and description', () => {
    render(<RestaurantCard {...props} />);
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should render restaurant location information', () => {
    render(<RestaurantCard {...props} />);
    expect(screen.getByText('City: Test City')).toBeInTheDocument();
    expect(screen.getByText('Zip Code: 12345')).toBeInTheDocument();
  });

  it('should render restaurant inspection information', () => {
    render(<RestaurantCard {...props} />);
    expect(screen.getByText('Inspection Result:')).toBeInTheDocument();
    expect(screen.getByText('Unsatisfactory')).toBeInTheDocument();
    expect(screen.getByText('Inspection Date: 2022-03-15')).toBeInTheDocument();
  });
});
