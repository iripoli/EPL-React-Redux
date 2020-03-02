import React from 'react';

const Card = ({name, badge})=>{


  return(
    <>
    <div className="card tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={badge} alt='Team Badge' className="badge"/>
      <div>
        <h3>{name}</h3>
      </div>

    </div>
    </>
  )
}

export default Card;