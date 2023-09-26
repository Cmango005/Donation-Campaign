import { Link } from "react-router-dom";


const Search = ({item}) => {
    const {img,title,name,background_color,text_color,id}=item;
    const cardStyle = {
        backgroundColor: background_color,
        
      };
      const titleStyle = {
        color: text_color,
        
      };
    return (
      
        <div className="h-screen">
            <p className="font-bold text-5xl">Searched Result</p>
            <div >
                 
           <Link to={`/card/${id}`}>
           <div style={cardStyle}  className="card-body w-72 mt-5 rounded-xl bg-base-100 shadow-2xl" >
          <div className='w-56 '><img  src={img} alt="" /></div>
          <h2 style={titleStyle} >{title}</h2>
          <p style={titleStyle}>{name}</p>
          </div>
          </Link>
        </div>
        </div>
       
    );
};

export default Search;