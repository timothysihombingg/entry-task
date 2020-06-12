import React from 'react'
import Image from '../../assets/images/gmap.png'

import './Card.css'

function Card() {
  return (
    <div>
      <div>
        <img id="card-usr-img" alt="user profile" src={Image} />
        <div>Username</div>
        <div>Channel name longer</div>
      </div>
      <p>Activity Title Name Make it Longer May Longer than One Line</p>
      <div>

      </div>
      <p>
        [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...
      </p>
      <div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Card;