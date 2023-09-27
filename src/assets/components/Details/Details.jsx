import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../utility/localstorage";
const Details = () => {
    const details =useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail=> detail.id === idInt);
    const handleDonation =()=>{
        saveDonation(idInt);
        toast('Successfully Donate');
     
}
    return (
        <div className="flex ">
            <div>
            <div className=" flex flex-col items-center">
            <img className="w-8/12" src={detail.img} alt="" />
            <div className="-mt-24 w-8/12 p-4 bg-[#121212b3]"><button onClick={handleDonation} style={{
            backgroundColor: detail.text_color,}} className="p-5 border-2  hover:text-white text-black  font-bold rounded-lg">Donate $ {detail.donate_amount}</button></div>
            
            <h2 className="font-bold text-4xl">{detail.name}</h2>
            <p className="w-3/4">{detail.description}</p>
            <ToastContainer />
            </div>
          
            </div>
            
        </div>
    );
};

export default Details;
