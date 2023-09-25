import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import './Home.css'

const Home = () => {
    const home= useLoaderData();
    return (
       <div>
            <div className="flex flex-col w-4/5 lg:w-fit  search-card  bg-no-repeat container mx-auto bg-cover h-96 justify-center items-center">
               <div className="px-24 py-32 lg:px-96  lg:py-36  w-fit bg-[#d3ccccb3]">
               <h2 className="font-bold text-xl">I Grow By Helping People In Need</h2>
               <div className="form-control flex ml-3 mt-5">
                   <label className="input-group">
                     <input type="text" placeholder="Search here..." className="input input-bordered" />
                     <button className="btn btn-active hover:bg-red-500 hover:text-white btn-ghost ">Search</button>
                   </label>
              </div>
               </div>
            </div>
            <div className="grid grid-cols-1 ml-44 md:grid-cols-2 lg:grid-cols-4 lg:container lg:mx-auto">
                {
                    home.map(card=> <Card key={card.id} card={card}></Card>)
                }
            </div>
       </div>
    );
};
export default Home;