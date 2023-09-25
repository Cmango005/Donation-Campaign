const getStoredDonation =()=>{
    const storedDonation = localStorage.getItem('donation-store');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}
const saveDonation =id =>{
 const storedDonations= getStoredDonation();
 const exists = storedDonations.find(donateId=> donateId===id);
 if(!exists){ 
    storedDonations.push(id);
    localStorage.setItem('donation-store', JSON.stringify(storedDonations));
 }
}
export {getStoredDonation,saveDonation}