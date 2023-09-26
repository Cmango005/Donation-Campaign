import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../utility/localstorage";
const Details = () => {
    const details =useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail=> detail.id===idInt);
    const handleDonation =()=>{
        saveDonation(idInt);
        toast("Donate Successfully");
        
            const isExist=details.find(detail=> detail.id===idInt);
            
            if (isExist){
               toast("Already Taken");
            }
    }
    return (
        <div className="flex ">
            <div>
            <div className=" flex flex-col items-center">
            <img className="w-8/12" src={detail.img} alt="" />
            <div className="-mt-24 w-8/12 p-4 bg-[#121212b3]"><Link to="/donation"><button onClick={handleDonation} className="p-5 border-2  hover:text-white text-black bg-red-500 font-bold rounded-lg">Donate {detail.donate_amount}$</button></Link></div>
            <h2 className="font-bold text-4xl">{detail.name}</h2>
            <p className="w-3/4">{detail.description}</p>
            </div>
            <ToastContainer />
            </div>
            
        </div>
    );
};

export default Details;
