import { PieChart,Pie, Tooltip} from 'recharts';


import { useLoaderData } from "react-router-dom";
const Static = () => {
    const home= useLoaderData();
    return (
        <div>
            <PieChart width={730} height={250}>
            <Pie data={home} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Tooltip></Tooltip>
            <Pie data={0} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>

        </div>
    );
};

export default Static;