import React, { Component } from 'react';
import sideFlower from '../style/sideflower.png';

class SideFlower extends Component {
  render() {
    return(
        <div className="row p-0">
          <img className='flower' src={sideFlower} alt="Flower Photo"/>
        </div> 
    )
  }
  }

  export default SideFlower;