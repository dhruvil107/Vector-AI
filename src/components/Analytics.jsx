import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

function Analytics({ stock }) {
  const data = {
    labels: stock.map(item => item.name),
    datasets: [
      {
        label: "Sales (₹)",
        data: stock.map(item => item.soldToday * item.price),
        backgroundColor: "#4f46e5",
      },
      {
        label: "Profit / Loss (₹)",
        data: stock.map(
          item => item.soldToday * (item.price - item.cost)
        ),
        borderColor: "#16a34a",
        backgroundColor: "#16a34a",
        type: "line",
      },
    ],
  };

  return (
    <>
      <h3>📈 Sales & Profit</h3>
      <div className="chart-box">
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </>
  );
}

export default Analytics;
