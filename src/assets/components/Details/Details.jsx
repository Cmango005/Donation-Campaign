import { Link, useLoaderData, useParams } from "react-router-dom";
const Details = () => {
    const details =useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail=> detail.id===idInt);
    return (
        <div className="container mx-auto flex flex-col items-center">
            <img className="w-8/12" src={detail.img} alt="" />
            <div className="-mt-24 w-8/12 p-4 bg-[#121212b3]"><button className="p-5 border-2  hover:text-white text-black bg-red-500 font-bold rounded-lg"><Link>Donate {detail.donate_amount}$</Link></button></div>
            <h2 className="font-bold text-4xl">{detail.name}</h2>
            <p className="w-3/4">{detail.description}</p>
        </div>
    );
};

export default Details;