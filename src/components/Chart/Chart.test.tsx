import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chart } from './Chart';

describe('Chart', () => {
    const testData= [
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

    it('renders a doughnut chart', () => {
        const { getByText, getByRole } = render(<Chart data={testData} />);

        expect(getByText('Restaurant inspections by inspection result')).toBeInTheDocument();
        expect(getByRole('img')).toBeInTheDocument();
    });
});
