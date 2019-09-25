import React from 'react'
import './Display.css'
import CustomImage from '../CustomMedia/CustomImage.js'
import CustomText from '../CustomMedia/CustomText.js'
import CustomSound from '../CustomMedia/CustomSound.js'

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      image: '',
      sound: ''
    }
  }

  componentDidMount() {
    this.fetchText(this.props.textIndex, this.props.textCategory)
    this.fetchImage(this.props.imageIndex, this.props.imageCategory)
    this.fetchSound(this.props.soundIndex, this.props.soundCategory)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.tabId !== this.props.tabId) {
      // Switched tabs
      const response = this.retrieveFromStorage()
      if (response) {
        this.setState({text: response.text, image: response.image, sound: response.sound})
      } else {
        this.fetchCorrectMedia(prevProps)
        this.saveToStorage()
      }
    } else {
      this.fetchCorrectMedia(prevProps)
      this.saveToStorage()
    }
  }

  fetchCorrectMedia(prevProps) {
    if (prevProps.textIndex !== this.props.textIndex || prevProps.textCategory !== this.props.textCategory) {
      this.fetchText(this.props.textIndex, this.props.textCategory)
    }
    if (prevProps.imageIndex !== this.props.imageIndex || prevProps.imageCategory !== this.props.imageCategory) {
      this.fetchImage(this.props.imageIndex, this.props.imageCategory)
    }
    if (prevProps.soundIndex !== this.props.soundIndex || prevProps.soundCategory !== this.props.soundCategory) {
      this.fetchSound(this.props.soundIndex, this.props.soundCategory)
    }
  }

  fetchText(index, category) {
    if (category) {
      fetch(`./assets/text/${category.toLowerCase()}/text.json`)
      .then(function(response) {
        return response.json()
      })
      .then(jsonData => {
        this.setState({ text: jsonData[index].text })
      })
    }
  }

  fetchImage(index, category) {
    if (category) {
      fetch(`./assets/image/${category.toLowerCase()}/${index + 1}.svg`)
        .then(response => response.text())
        .then(xmlData => this.setState({ image: xmlData }))
    }
  }

  fetchSound(index, category) {
    if (category) {
      this.setState({ sound: `./assets/sound/${category.toLowerCase()}/${index + 1}.mp3` })
    }
  }

  saveToStorage() {
    let data = {
      text: this.state.text,
      image: this.state.image,
      sound: this.state.sound
    }
    if (this.props.tabId) {
      sessionStorage.setItem(this.props.tabId.toString(), JSON.stringify(data))
    }
  }

  retrieveFromStorage() {
    if (this.props.tabId) {
      const response_str = sessionStorage.getItem(this.props.tabId.toString())
      const response = JSON.parse(response_str)
      return response
    }
  }

  render() {
    return (
      <div className="display">
        <div className="image-section">
          <CustomImage image={this.state.image} />
        </div>
        <div className="text-section">
          <CustomText text={this.state.text} />
        </div>
        <div className="sound-section">
          <CustomSound sound={this.state.sound} />
        </div>
      </div>
    )
  }
}

export default Display
