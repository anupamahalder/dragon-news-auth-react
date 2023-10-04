import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NewsCard = ({news}) => {
    const {title,thumbnail_url, details, _id} = news;
    return (
        <div className="card w-full bg-base-100 shadow-xl border">
        <h2 className="card-title p-4">{title}</h2>
        <figure><img src={thumbnail_url} alt="news" className='p-4 w-full h-[350px]'/></figure>
        <div className="card-body">
                {
                    details.length > 200 ? <p>{details.slice(0,200)}
                    {/* create dynamic route for eCh news  */}
                    <Link to={`/news/${_id}`}
                     className='font-semibold text-red-500'>Read More...</Link></p> : <p>{details}</p>
                }
        </div>
        </div>
    );
};
// adding proptypes 
NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
}

export default NewsCard;