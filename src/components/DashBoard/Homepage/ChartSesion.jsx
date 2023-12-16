
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";


// Dummy data for charts
const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-8 gap-4">
        {/* Bar Chart */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Bar Chart</h2>
          <Bar data={chartData} options={options} />
        </div>
        {/* Doughnut Chart */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Doughnut Chart</h2>
          <Doughnut data={chartData} options={options} />
        </div>

        {/* Line Chart */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Line Chart</h2>
          <Line data={chartData} options={options} />
        </div>

        {/* Pie Chart */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Pie Chart</h2>
          <Pie data={chartData} options={options} />
        </div>



        
      </div>
  )
}

export default ChartSesion
