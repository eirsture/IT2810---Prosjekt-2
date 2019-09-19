import React from 'react'
import './CustomSVG.css'

const CustomSvg = ({ image }) => {
  return (
    <div className="imageContainer" dangerouslySetInnerHTML={{__html: image}} />
  )
}

export default CustomSvg;
