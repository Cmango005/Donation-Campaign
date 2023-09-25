import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localstorage";


const Donation = () => {
    const donations = useLoaderData();
    const [appliedDonations,setAppliedDonations]=useState([]);
    useEffect(()=>{
      const storedDonationId =getStoredDonation();
      if(donations.length>0){
        //const donationApplied = donation.filter(item => storedDonationId.includes(item.id))
        const donationsApplied =[];
        for(const id of storedDonationId){
            const donation =donations.find(donation => donation.id ===id);
            if(donation){
                donationsApplied.push(donation) 
            }
        }
        setAppliedDonations(donationsApplied);
    
      }
      
    },[]);
    
    
    return (
        <div className="grid grid-cols-2">
            
           
           
           {
               appliedDonations.map(donation => <li key={donation.id}>
               <div className="flex">
                <div>
                <img src={donation.img} alt="" />
                </div>
                <div>
                <h3>{donation.title}</h3>
                </div>
               </div>
                
                
               </li>) 
            }
           
           </div>
        
    );
};

export default Donation;