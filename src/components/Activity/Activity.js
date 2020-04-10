import React from 'react';
import './Activity.css';
import { Link } from 'react-router-dom';

const Activity = ({ activity }) => {
  const {
    activityType,
    cost,
    id,
    image,
    rating,
    title,
    totalRatings,
  } = activity;
  return (
    <div className='activity'>
      <Link to={`/activity/${id}`}>
        <img src={image} alt={activityType} />
        <div className='activity-type'>{activityType}</div>
        <div className='title'>{title}</div>
        <div className='cost'>From ${cost}/person</div>
        <div className='rating'>
          <i className='material-icons'>star</i>
          {rating} ({totalRatings})
        </div>
      </Link>
    </div>
  );
};

export default Activity;
