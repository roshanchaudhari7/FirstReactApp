import React from 'react'

const Introduce = ({imgUrl, name, price}) => {
  return (
    <div className='card-container'>
      <img src={imgUrl} alt="Tiger Image" id='imgcontent'/>     
      <h2>{`${name}`}</h2>
      <p>{`${price}`}</p>
    </div>
  )
}

export default Introduce
