import * as React from 'react'
import './Details.css'
import DetailsHeader from './DetailsHeader'
import DetailsBar from './DetailsBar'
import Bar from '../Bar/Bar'
import When from './When'

function Details() {
  return (
    <div>
      <Bar />
      <div className="details-header">
        <DetailsHeader />
        <hr />
        <DetailsBar />
        <hr />
        <When />
        <hr />
        
      </div>
    </div>
  );
}

export default Details;