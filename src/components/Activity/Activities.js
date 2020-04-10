import React from 'react';
import './Activity.css';
import Activity from './Activity';

const Activities = ({ activities, header }) => {
  const activitiesComponents = activities.map((activity, i) => {
    return (
      <div key={i} className='col s2'>
        <Activity activity={activity} />
      </div>
    );
  });
  return (
    <div className='activities'>
      <h1 className='main-header-text'>{header}</h1>
      {activitiesComponents}
    </div>
  );
};

export default Activities;
