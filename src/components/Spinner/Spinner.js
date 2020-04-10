import React from 'react';
import './Spinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSpinner);

const Spinner = () => {
  return (
    <div className='spinner-wrapper'>
      <FontAwesomeIcon icon='spinner' size='3x' spin />
    </div>
  );
};

export default Spinner;
