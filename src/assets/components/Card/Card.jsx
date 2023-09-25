import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {img,title,name,background_color,text_color,id}=card;
    
     
    const cardStyle = {
        backgroundColor: background_color,
        
      };
      const titleStyle = {
        color: text_color,
        
      };

    return (
        <div>
           <Link to={`/card/${id}`}>
           <div style={cardStyle}  className="card-body w-72 mt-5 rounded-xl bg-base-100 shadow-2xl" >
          <img className="w-96" src={img} alt="" />
          <h2 style={titleStyle} >{title}</h2>
          <p style={titleStyle}>{name}</p>
          </div>
          </Link>
        </div>
    );
};
Card.propTypes={
    card: PropTypes.object
 }

export default Card;