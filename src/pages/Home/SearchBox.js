import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = () => {

  const [where, setWhere] = useState('');
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(0);

  const changeWhere = (e) => {
    setWhere(e.target.value);
  };
  const changeCheckIn = (e) => {
    setCheckIn(e.target.value);
  };
  const changeCheckOut = (e) => {
    setCheckOut(e.target.value);
  };
  const changeGuests = (e) => {
    setGuests(e.target.value);
  };

  return (
    <div className='home-search-box col m4'>
      <h1>Book unique places to stay and things to do.</h1>

      <form className='search-box-form'>
        <div className='col m12'>
          <div className='form-label'>Where</div>
          <div className='input-field' id='where'>
            <input
              className='browser-default'
              onChange={changeWhere}
              placeholder='Anywhere'
              value={where}
              type='text'
            />
          </div>
        </div>

        <div className='col m6'>
          <div className='form-label'>Check-In</div>
          <div className='input-field' id='check-in'>
            <input
              className='browser-default'
              onChange={changeCheckIn}
              value={checkIn}
              type='date'
            />
          </div>
        </div>
        <div className='col m6'>
          <div className='form-label'>Check-Out</div>
          <div className='input-field' id='check-in'>
            <input
              className='browser-default'
              onChange={changeCheckOut}
              value={checkOut}
              type='date'
            />
          </div>
        </div>
        <div className='col m12'>
          <div className='form-label'>Guests</div>
          <div className='input-field' id='where'>
            <input
              className='browser-default'
              onChange={changeGuests}
              placeholder='Number of guests'
              value={guests}
              type='number'
            />
          </div>
        </div>
        <div className='col m12 submit-btn'>
          <div className='input-field' id='submit-btn'>
            <input
              className='btn-large waves-effect waves-light red accent-2'
              type='submit'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
