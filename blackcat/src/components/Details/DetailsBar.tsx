import * as React from 'react'

import './DetailsBar.css'

function DetailsBar() {
  return (
    <div className="details-bar">
      <button id="details-detail-btn">Details</button>
      <button id="details-comments-btn">Comments</button>
      <button id="details-participants-btn">Participants</button>
    </div>
  );
}

export default DetailsBar;