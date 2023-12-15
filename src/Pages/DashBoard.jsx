// HomePage.js
import { Bar, Pie } from 'react-chartjs-2';

const DashBoard = () => {
  // Sample data for charts
  const barChartData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        label: 'Sample Bar Chart',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const pieChartData = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8C14FC',
          '#3ADF00',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8C14FC',
          '#3ADF00',
        ],
      },
    ],
  };

  return (
    <div>
      {/* <h2>Bar Chart</h2>
      <Bar
        data={barChartData}
        options={{
          scales: {
            x: {
              type: 'category', // Use 'category' scale for x-axis
            },
          },
        }}
      />

      <h2>Pie Chart</h2>
      <Pie data={pieChartData} /> */}
    </div>
  );
};

export default DashBoard;




