import { IRestaurantCard } from "../../types";
import { chartBackgroundColors, chartBorderColors } from "./constants";
import { processData, getLabelInformation } from "./utlis";

const restaurantSatisfactory = {
    name: 'Test Restaurant 1',
    description: 'Test Description 1',
    city: 'Test City 1',
    zip_code: '12345',
    inspection_result: 'Satisfactory',
    inspection_date: '2022-03-15T13:30:00.000Z',
};
const restaurantComplete = {
    name: 'Test Restaurant 1',
    description: 'Test Description 1',
    city: 'Test City 1',
    zip_code: '12345',
    inspection_result: 'Complete',
    inspection_date: '2022-03-15T13:30:00.000Z',
};
const restaurantUnsatisfactory = {
    name: 'Test Restaurant 1',
    description: 'Test Description 1',
    city: 'Test City 1',
    zip_code: '12345',
    inspection_result: 'Unsatisfactory',
    inspection_date: '2022-03-15T13:30:00.000Z',
};


describe('processData function', () => {
  it('returns an empty object if the input array is empty', () => {
    const emptyData: IRestaurantCard[] = [];
    expect(processData(emptyData)).toEqual({});
  });

  it('returns an object with the correct count for each inspection result', () => {

    const data : IRestaurantCard[] = Array(3).fill(restaurantSatisfactory)
        .concat(
            Array(2).fill(restaurantComplete),
            Array(2).fill(restaurantUnsatisfactory)
        );
    const expectedResult = {
      'Satisfactory': 3,
      'Complete': 2,
      'Unsatisfactory': 2,
    };
    expect(processData(data)).toEqual(expectedResult);
  });
});

describe('getLabelInformation function', () => {
  it('returns empty arrays if the input object is empty', () => {
    const emptyData = {};
    const expectedResult = [[], [], [], []];
    expect(getLabelInformation(emptyData)).toEqual(expectedResult);
  });

  it('returns arrays with the correct label and data information', () => {
    const processedData = {
        'Satisfactory': 4,
        'Complete': 2,
        'Unsatisfactory': 2,
    };
    const expectedLabels = ['Satisfactory', 'Complete', 'Unsatisfactory'];
    const expectedLabelsData = [4, 2, 2];
    const expectedLabelsBackgroundColors = [chartBackgroundColors['Satisfactory'],
      chartBackgroundColors['Complete'],
      chartBackgroundColors['Unsatisfactory'],
    ];
    const expectedLabelsBorderColors = [      chartBorderColors['Satisfactory'],
      chartBorderColors['Complete'],
      chartBorderColors['Unsatisfactory'],
    ];
    const expectedResult = [
        expectedLabels,
        expectedLabelsData,
        expectedLabelsBackgroundColors,
        expectedLabelsBorderColors,
    ];
    expect(getLabelInformation(processedData)).toEqual(expectedResult);
  });
});
