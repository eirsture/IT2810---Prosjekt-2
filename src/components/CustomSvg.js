import React from 'react';

const CustomSvg = ({ image }) => {
  
  return (
    <div dangerouslySetInnerHTML={{__html: image}} />
  )
}

export default CustomSvg;
