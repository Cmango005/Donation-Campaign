import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localstorage";

const Donation = () => {
  const donations = useLoaderData();
  const [appliedDonations, setAppliedDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const handleCancel =()=>{
    localStorage.clear()
    setAppliedDonations([]);
  }

  useEffect(() => {
    const storedDonationId = getStoredDonation();
    if (donations.length > 0) {
      const donationsApplied = [];
      for (const id of storedDonationId) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donationsApplied.push(donation);
        }
      }
      setAppliedDonations(donationsApplied);
    }
  }, [donations]);

  

  return (
    <div className="grid grid-cols-2  container mx-auto">
      {appliedDonations.slice(0, showAll ? appliedDonations.length : 4).map((donation) => (
        <div key={donation.id}>
          <div style={{ backgroundColor: donation.background_color }} className="flex mt-5 rounded-lg w-10/12 space-x-5">
            <div>
              <img className="w-52 h-44" src={donation.img} alt="" />
            </div>
            <div className="mt-3 space-y-2">
              <h3 style={{ color: donation.text_color }} className="font-bold shadow-2xl">
                {donation.title}
              </h3>
              <h2 className="font-bold text-lg">{donation.name}</h2>
              <h3 style={{ color: donation.text_color }} className="font-bold">
                ${donation.donate_amount}
              </h3>
              <button
                style={{ backgroundColor: donation.text_color }}
                className="border-2 rounded-lg text-white shadow-2xl px-3 py-2"
              >
                <Link to={`/card/${donation.id}`}>View Details</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
      {!showAll && appliedDonations.length > 4 && 
        <div className="text-center ml-96 mt-5">
          <button
            className="border-2 rounded-lg text-white shadow-2xl px-3 py-2 bg-blue-500"
            onClick={handleShowAll}
          >
            Show All
          </button>
        </div>
      }
      {
        appliedDonations.length>0 && <div className="text-center ml-48 mt-5"><button onClick={handleCancel} className="border-2 rounded-lg text-white shadow-2xl px-3 py-2 bg-blue-500">Cancel Donate</button></div>
      }
    </div>
  );
};

export default Donation;
