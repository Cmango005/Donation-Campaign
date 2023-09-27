import  { useEffect, useState } from "react";
import {  Pie } from "recharts";
import { getStoredDonation } from "../utility/localstorage";
import { PieChart } from "recharts";


const Static = () => {
    const donate = getStoredDonation();
    console.log(donate);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (donate.length > 0) {
     
      const totalDonated = donate.reduce((acc, donation) => {
        return acc + donation.donate_amount;
      }, 0);

      
      const totalRemaining = donate.reduce((acc, donation) => {
        return acc + donation.target_amount - donation.donate_amount;
      }, 0);

      
      const data = {
        labels: ["Donated", "Remaining"],
        datasets: [
          {
            data: [totalDonated, totalRemaining],
            backgroundColor: ["#36A2EB", "#FFCE56"], // You can change the colors as needed
          },
        ],
      };

      setChartData(data);
    }
  }, [donate]);

  return (
    <div className="w-1/2 mx-auto mt-5">
      {chartData && (
        <PieChart width={730} height={250}>
        <Pie data={chartData} outerRadius={50} fill="#8884d8" labels/>
        
      </PieChart>
      )}
    </div>
  );
};

export default Static;
