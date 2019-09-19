import React from 'react'
import './App.css'
import Sidebar from './components/sidebarContent'
import ButtonRow from './components/ButtonRow'
import Display from './components/Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenCategories: {Image:'cat', Sound:'cat', Text:'cat'},
      indices: {imageIndex: 0, soundIndex: 0, textIndex: 0},
      selectedTab: 1
    }
  }

  generateRandomIndex = () => {
    return Math.floor(Math.random() * 4)
  }

  selectedTab = (tab) => {
    this.setState({selectedTab: tab})
  }

  selectedCategory = (mediaType, category) => {  
    const index = this.generateRandomIndex()
    if (mediaType === "Image") {
      this.setState({chosenCategories: {...this.state.chosenCategories, Image:category}, indices: {...this.state.indices, imageIndex:index}})
    } else if (mediaType === "Sound") {
      this.setState({chosenCategories: {...this.state.chosenCategories, Sound:category}, indices: {...this.state.indices, soundIndex:index}})
    } else if (mediaType === "Text") {
      this.setState({chosenCategories: {...this.state.chosenCategories, Text:category}, indices: {...this.state.indices, textIndex: index}})
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>header</h2>
        </header>
        <div className="sidebar">
          <Sidebar categories={["Cat", "Dog", "Horse"]} selectedCategory={this.selectedCategory} />
        </div>
        <div className="content">
          <Display 
            textIndex={this.state.indices.textIndex} 
            textCategory={this.state.chosenCategories.Text} 
            SVGIndex={this.state.indices.imageIndex}
            SVGCategory={this.state.chosenCategories.Image} 
            audioIndex={this.state.indices.soundIndex}
            audioCategory={this.state.chosenCategories.Sound}
          />
        </div>
        <div className="button-section">
          <ButtonRow selectedTab={this.selectedTab} />
        </div>
        <div className="footer">
          <h4>Footer</h4>
        </div>
      </div>
    )
  }
}

export default App;
