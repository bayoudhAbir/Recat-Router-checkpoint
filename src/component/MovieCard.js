import react from 'react';
import StarRating from './StarRating';
import {Route,Link, useHistory} from 'react-router-dom'
import DescriptionPage  from './DescriptionPage'

const MovieCard=props=>{
  
  let history = useHistory();
    console.log(history);
return(
     
    <div className='cardContainer'>
        <div>
          <Link to={`/descriptionPage/${props.movie.id}`}>
           <img className="filmCard" src={props.movie.posterURL}   
           />
          </Link>
          </div>
        <div className='row'>
        <h1>{props.movie.title}</h1>
        </div>
        <div className='row'>
        <p>{props.movie.description}</p>
        </div>
        <div className='row'>
        </div>
        <div className='row'>
        <StarRating rating={props.movie.rating}></StarRating>
        </div>
        
     </div>
)
}
export default MovieCard;