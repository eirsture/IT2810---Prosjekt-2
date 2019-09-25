import React from 'react'
import './CustomImage.css'

const CustomImage = ({ image }) => {
  return (
    <div className="imageContainer" dangerouslySetInnerHTML={{__html: image}} />
  )
}

export default CustomImage;
