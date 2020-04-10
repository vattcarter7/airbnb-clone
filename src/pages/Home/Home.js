import React, { useState, useEffect, Fragment } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Spinner from '../../components/Spinner/Spinner';
import axios from 'axios';
import Cities from '../../components/City/Cities';
import Activities from '../../components/Activity/Activities';
import Venues from '../../components/Venue/Venues';

const Home = () => {
  const [resolveData, setResolveData] = useState({
    recommendedCities: [],
    europeCities: {},
    asiaCities: {},
    exoticCities: {},
    activities: [],
    recVenues: {},
  });

  useEffect(() => {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    const europeCitiesUrl = `${window.apiHost}/cities/europe`;
    const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
    const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;
    const activitiesUrl = `${window.apiHost}/activities/today`;
    const recVenuesUrl = `${window.apiHost}/venues/recommended`;

    const resolveDataPromises = [];

    resolveDataPromises.push(axios.get(citiesUrl));
    resolveDataPromises.push(axios.get(europeCitiesUrl));
    resolveDataPromises.push(axios.get(asiaCitiesUrl));
    resolveDataPromises.push(axios.get(exoticCitiesUrl));
    resolveDataPromises.push(axios.get(activitiesUrl));
    resolveDataPromises.push(axios.get(recVenuesUrl));

    Promise.all(resolveDataPromises).then((data) => {
      const recommendedCities = data[0].data;
      const europeCities = data[1].data;
      const asiaCities = data[2].data;
      const exoticCities = data[3].data;
      const activities = data[4].data;
      const recVenues = data[5].data;

      setResolveData({
        recommendedCities,
        europeCities,
        asiaCities,
        exoticCities,
        activities,
        recVenues,
      });
    });
  }, []);

  const {
    recommendedCities,
    activities,
    europeCities,
    recVenues,
    asiaCities,
    exoticCities,
  } = resolveData;

  if (
    recommendedCities.length === 0 ||
    !recVenues.venues ||
    activities.length === 0 ||
    !europeCities
  ) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='home col s12'>
            <div className='upper-fold'>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid lower-fold'>
        <div className='row'>
          <div className='col s12'>
            <Cities
              cities={recommendedCities}
              header='Recommended Cities For You'
            />
          </div>

          <div className='col s12'>
            <Activities activities={activities} header='Today in your area' />
          </div>

          <div className='col s12'>
            <Cities cities={europeCities.cities} header={europeCities.header} />
          </div>

          <div className='col s12'>
            <Venues venues={recVenues.venues} header={recVenues.header} />
          </div>

          <div className='col s12'>
            <Cities cities={asiaCities.cities} header={asiaCities.header} />
          </div>

          <div className='col s12'>
            <Cities cities={exoticCities.cities} header={exoticCities.header} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
