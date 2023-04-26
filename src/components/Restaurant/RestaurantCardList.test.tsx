import { render, screen } from '@testing-library/react';
import { RestaurantCardList } from './RestaurantCardList';

describe('RestaurantCardList', () => {
  it('should render a list of restaurant cards', () => {
    const restaurantList= [
      {
        name: 'Test Restaurant 1',
        description: 'Test Description 1',
        city: 'Test City 1',
        zip_code: '12345',
        inspection_result: 'Satisfactory',
        inspection_date: '2022-03-15T13:30:00.000Z',
      },
      {
        name: 'Test Restaurant 2',
        description: 'Test Description 2',
        city: 'Test City 2',
        zip_code: '67890',
        inspection_result: 'Unsatisfactory',
        inspection_date: '2022-04-01T10:00:00.000Z',
      },
    ];

    render(<RestaurantCardList restaurantCardList={restaurantList}/>);
    expect(screen.getByText('Test Restaurant 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Restaurant 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2')).toBeInTheDocument();
  });
});