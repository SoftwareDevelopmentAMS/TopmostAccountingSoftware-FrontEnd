import {   Pie, Radar } from "react-chartjs-2";
import "chart.js/auto";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

// Dummy data for charts
const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)", // pink
        "rgba(54, 162, 235, 0.2)", // blue
        "rgba(255, 206, 86, 0.2)", // yellow
        "rgba(75, 192, 192, 0.2)", // green
        "rgba(153, 102, 255, 0.2)", // purple
        "rgba(255, 159, 64, 0.2)", // orange
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)", // pink
        "rgba(54, 162, 235, 1)", // blue
        "rgba(255, 206, 86, 1)", // yellow
        "rgba(75, 192, 192, 1)", // green
        "rgba(153, 102, 255, 1)", // purple
        "rgba(255, 159, 64, 1)", // orange
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart Title",
    },
  },
};

const ChartSesion = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 my-8 gap-4">
      {/* Bar Chart */}
      <div className="p-4 bg-white rounded-lg h-fit shadow-md">
        <h2 className="text-lg font-bold mb-2">Bar Chart</h2>
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          // width={500}
          height={400}
        />
      </div>
      {/* Line Chart */}
      <div className="p-4 bg-white rounded-lg h-fit shadow-md">
        <h2 className="text-lg font-bold mb-2">Line Chart</h2>
        <LineChart
  xAxis={[{
    scaleType: 'band',
    data: ["Jan", "Feb", "Mar", "May", "Aug", "Oct"]
  }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  height={400}
/>

      </div>

      {/* Doughnut Chart */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Doughnut Chart</h2>
        <Radar data={chartData} options={options} />
      </div>

      {/* Pie Chart */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Pie Chart</h2>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartSesion;
