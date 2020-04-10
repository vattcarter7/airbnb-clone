import React, { useState, useEffect } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import Point from './Point';

const SingleFullVenue = ({ match }) => {
  const [resolveData, setResolveData] = useState({
    singleVenue: {},
    points: [],
  });
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  useEffect(() => {
    const vId = match.params.vid;
    const singleVenueUrl = `${window.apiHost}/venue/${vId}`;
    const pointsUrl = `${window.apiHost}/points/get`;

    const resolveDataPromises = [];

    resolveDataPromises.push(axios.get(singleVenueUrl));
    resolveDataPromises.push(axios.get(pointsUrl));

    Promise.all(resolveDataPromises).then((data) => {
      const singleVenue = data[0].data;
      const points = data[1].data;
      console.log(singleVenue);
      console.log(points);
      setResolveData({
        singleVenue,
        points,
      });
    });
  }, [match]);

  const changeNumberOfGuests = (e) => {
    setNumberOfGuests(e.target.value);
  };
  const changeCheckIn = (e) => {
    setCheckIn(e.target.value);
  };
  const changeCheckOut = (e) => {
    setCheckOut(e.target.value);
  };

  const reserveNow = (e) => {
    console.log('User wants to reserve!');
  };

  const {
    imageUrl,
    location,
    title,
    guests,
    details,
    amenities,
    rating,
    pricePerNight,
  } = resolveData.singleVenue;

  const { points } = resolveData.points;

  if (!resolveData.singleVenue || resolveData.points.length === 0) {
    return <Spinner />;
  }

  return (
    <div className='row single-venue'>
      <div className='col s12 center'>
        <img src={imageUrl} alt={imageUrl} />
      </div>
      <div className='col s8 location-details offset-s2'>
        <div className='col s8 left-details'>
          <div className='location'>{location}</div>
          <div className='title'>{title}</div>
          <div className='guests'>{guests}</div>

          <div className='divider'></div>

          {points &&
            points
              .split(',')
              .map((point, i) => (
                <Point key={i} pointDesc={points} point={point} />
              ))}

          <div className='details'>{details}</div>
          <div className='amenities'>{amenities}</div>
        </div>

        <div className='col s4 right-details'>
          <div className='price-per-day'>
            ${pricePerNight} <span>per day</span>
          </div>
          <div className='rating'>{rating}</div>
          <div className='col s6'>
            Check-In
            <input type='date' onChange={changeCheckIn} value={checkIn} />
          </div>
          <div className='col s6'>
            Check-Out
            <input type='date' onChange={changeCheckOut} value={checkOut} />
          </div>

          <div className='col s12'>
            <select
              className='browser-default'
              onChange={changeNumberOfGuests}
              value={numberOfGuests}
            >
              <option value='1'>1 Guest</option>
              <option value='2'>2 Guest</option>
              <option value='3'>3 Guest</option>
              <option value='4'>4 Guest</option>
              <option value='5'>5 Guest</option>
              <option value='6'>6 Guest</option>
              <option value='7'>7 Guest</option>
              <option value='8'>8 Guest</option>
            </select>
          </div>
          <div className='col s12 center'>
            <button onClick={reserveNow} className='btn red accent-2'>
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFullVenue;
