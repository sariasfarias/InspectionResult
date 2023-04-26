import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { IChart } from '../../types';
import { getLabelInformation, processData } from './utlis';
import { chartLabelTag, chartTittle } from './constants';
import './Chart.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart (props: IChart) {
    const processedData = processData(props.data);
    const [
        labels , 
        labelsData,
        labelsBackgroundColors,
        labelsBorderColors
    ] = getLabelInformation(processedData);

    const renderData = {
        labels: labels,
        datasets: [
            {
            label: chartLabelTag,
            data: labelsData,
            backgroundColor: labelsBackgroundColors,
            borderColor: labelsBorderColors,
            borderWidth: 1,
            },
        ],
    }

    return (
        <div className='chart'>
            <div>{chartTittle}</div>
            <Doughnut
                data={renderData}
                redraw={true}
            />
        </div>
    );
}