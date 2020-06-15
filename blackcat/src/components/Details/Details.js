import React from 'react';
import './Details.css'
import DetailsHeader from './DetailsHeader'
import DetailsBar from './DetailsBar'
import Bar from '../Bar/Bar'

function Details() {
  return (
    <div>
      <Bar />
      <div className="details-header">
        <DetailsHeader />
        <hr />
        <DetailsBar />
      </div>
    </div>
  );
}

export default Details;