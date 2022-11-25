import React from 'react'

const Footer = ({email, ciudad, direccion}) => {
  return (
    <div id='footer'>
      <p>{email}</p>
      <p>{ciudad}</p>
      <p>{direccion}</p>
    </div>
  )
}

export default Footer
