import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {img,title,name,background_color,text_color,id,bg_2}=card;

    return (
        <div className='ml-2'>
           <Link to={`/card/${id}`}>
           <div style={{backgroundColor: background_color,}}  className="card-body w-72 mt-5 rounded-xl bg-base-100 shadow-2xl" >
          <div className='w-56 '><img  src={img} alt="" /></div>
          <h2 style={{color: text_color,backgroundColor: bg_2}} className='w-20 rounded-lg py-1 text-center'>{title}</h2>
          <p style={{color: text_color}}>{name}</p>
          </div>
          </Link>
        </div>
    );
};
Card.propTypes={
    card: PropTypes.object
 }

export default Card;