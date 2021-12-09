import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);


export const options = {
    responsive: true,
    scales: {
        y: {
            reverse: true,
            ticks: {
                beginAtZero: true,
                callback: function(value) {if (value % 1 === 0) {return value;}}
            }
        }
    }
};
/*
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Rank',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
*/

export default function RankingGraph({ data }) {
    //const [options, setOptions] = useState({});

    return (
        <React.Fragment>
            <Line options={options} data={data} />
        </React.Fragment>
    )
}