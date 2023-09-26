
import { useLoaderData } from "react-router-dom";
import { PieChart,Pie, Tooltip } from "recharts";

const Static = () => {
    
   const data1=useLoaderData();
    return (
        <div>
            <PieChart width={1030} height={550}>
  <Pie data={data1} dataKey="donate_amount" nameKey="name" cx="70%" cy="60%" outerRadius={100} fill="#8884d8" />
  <Tooltip></Tooltip>
 
  
</PieChart>
        </div>
    );
};

export default Static;