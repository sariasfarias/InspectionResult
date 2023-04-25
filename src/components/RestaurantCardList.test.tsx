import { render, screen } from '@testing-library/react';
import { RestaurantCardList } from './RestaurantCardList';

describe('RestaurantCardList', () => {
  it('should render a list of restaurant cards', () => {
    const restaurantList= [
      {
        restaurantName: 'Test Restaurant 1',
        restaurantDescription: 'Test Description 1',
        restaurantCity: 'Test City 1',
        restaurantZipCode: '12345',
        restaurantInspectionResult: 'Pass',
        restaurantInspectionDate: '2022-03-15T13:30:00.000Z',
      },
      {
        restaurantName: 'Test Restaurant 2',
        restaurantDescription: 'Test Description 2',
        restaurantCity: 'Test City 2',
        restaurantZipCode: '67890',
        restaurantInspectionResult: 'Fail',
        restaurantInspectionDate: '2022-04-01T10:00:00.000Z',
      },
    ];

    render(<RestaurantCardList restaurantCardList={restaurantList}/>);
    expect(screen.getByText('Test Restaurant 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Restaurant 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2')).toBeInTheDocument();
  });
});