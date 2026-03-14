import {
 Chart as ChartJS,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 LineElement    
} from "chart.js";

import { Line } from "react-chartjs-2";
import Utils from "react-chartjs-2";

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
);

const labels = Utils.months({ count: 7 });

const data = {
  label: labels,
 labels: ["rem", "tracy", "frank", "robert"],
 datasets: [
  
  {
     label: "Rem's Brain Cells Functioning",
     data: [30, 40, 35, 50, 55, 60], 
     borderWidth: 2,
     borderColor: '#cf89c0',
   },
   {
     label: "Tracy's Brain Cells Functioning",
     data: [25, 30, 28, 35, 40, 45],
     borderWidth: 2,
     borderColor: '#4e0f4b',
   },
   {
     label: "Frank's Brain Cells Functioning",
     data: [20, 25, 30, 28, 35, 45],
     borderWidth: 2,
    borderColor: '#0c255c',
   }
   ,{
     label: "Robert's Brain Cells Functioning",
     data: [25, 30, 23, 28, 25, 40],
     borderWidth: 2,
    borderColor: '#0537a3',
    }
  ]
 };

const LineChartGroup=()=>{
return (
  <div>
    <h2>Brain Cells Functioning</h2>
    <Line data={data} />
  </div>

);
};

export default LineChartGroup;