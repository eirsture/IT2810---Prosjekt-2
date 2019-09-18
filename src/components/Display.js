import React from 'react';
import './Display.css';
import CustomSvg from './CustomSvg.js';
import CustomText from './CustomText.js';
import CustomSound from './CustomSound.js';

class Display extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      image: '',
      audio: ''
    }
  }

  componentDidMount() {
    this.fetchText(this.props.textIndex)
    this.fetchSVG()
    this.fetchAudio()
  }
  
  fetchText(index) {
    fetch("/cat/poems.json")
      .then(function(response) {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({text: jsonData[index].text})
      })
  }

  fetchSVG() {
    fetch('/dog/dog-1305702.svg')
      .then(response => response.text())
      .then(xmlData => this.setState({image: xmlData}))
  }

  fetchAudio() {
      this.setState({audio: '/cat/333916__thearxx08__cat-meowing.mp3'})
  }

  
  render() {
    return (
      <div className="display">
        <div className="svg-section">
          <h2>SVG</h2>
          <CustomSvg image={this.state.image} />
        </div>
        <div className="text-section">
          <h2>Text</h2>
          <CustomText text={this.state.text} />
        </div>
        <div className="sound-section">
          <h2>Sound</h2>
          <CustomSound sound={this.state.audio}/>
        </div>
      </div>
    );
  }
}

export default Display;
