import PropTypes from 'prop-types';
const NewsCard = ({news}) => {
    const {title} = news;
    return (
        <div>
            <h4 className="text-xl">{title}</h4>
        </div>
    );
};
// adding proptypes 
NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
}

export default NewsCard;