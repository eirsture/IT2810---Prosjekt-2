import React from 'react';
import './Display.css';
import CustomSvg from './CustomSvg.js';
import CustomText from './CustomText.js';
import CustomSound from './CustomSound.js';

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="svg-section">
          <h2>SVG</h2>
          <CustomSvg image={'/cat/cat-45760.svg'} />
        </div>
        <div className="text-section">
          <h2>Text</h2>
          <CustomText />
        </div>
        <div className="sound-section">
          <h2>Sound</h2>
          <CustomSound />
        </div>
      </div>
    );
  }
}

export default Display;
