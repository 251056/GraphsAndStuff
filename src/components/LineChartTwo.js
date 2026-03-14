import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
);

const data = {
 labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
 datasets: [
   {
     label: "Class A",
     data: [0, 1, 2, 2, 0],
     borderWidth: 8,
     borderColor: 'rgb(255, 99, 132)',
   },
   {
     label: "Class B",
     data: [2, 1, 1, 0, 0, 1],
     borderWidth: 8,
     borderColor: 'rgb(75, 192, 192)',
   }
 ]
};

const LineChartTwo = () => {
 return (
   <div>
     <h2>Rem's Two Brain Cells Functioning</h2>
     <Line data={data} />
   </div>
 );
};

export default LineChartTwo;
