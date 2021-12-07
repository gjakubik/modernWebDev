import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
		position: 'top',
		},
		title: {
		display: true,
		text: 'Chart.js Bar Chart',
		},
	},
};

export const data = {
	labels: [],
	datasets: [
		{
		label: 'Dataset 1',
		data: [],
		backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
		label: 'Dataset 2',
		data: [],
		backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};
export default function HomeView() {
	return (
		<React.Fragment>
			<Bar options={options} data={data} />
		</React.Fragment>
	);
}