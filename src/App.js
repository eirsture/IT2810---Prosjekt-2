import React from 'react'
import './App.css'
import Sidebar from './components/sidebarContent'
import ButtonRow from './components/ButtonRow'
import Display from './components/Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenCategories: {Image:'', Sound:'', Text:'' },
      indices: {imageIndex: 0, soundIndex: 0, textIndex: 0},
      selectedTab: 1
    }
  }

  generateRandomIndex = () => {
    return Math.floor(Math.random() * 4)
  }

  selectedTab = (tab) => {
    this.setState({selectedTab: tab})
    this.saveStateToLocalStorage(this.state)
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

  saveStateToLocalStorage = (state) => {
    localStorage.setItem("state", state)
  }

  componentDidMount = () => {
    const locallyStorage = JSON.parse(localStorage.getItem("state"))
    try {
      this.setState({chosenCategories: locallyStorage.chosenCategories})
      this.setState({indices: locallyStorage.indices})
      this.setState({selectedTab: locallyStorage.tab})
    } catch (error) {
      console.log("Error when parsing localStorage state")
      this.setState({chosenCategories: {Image:'Cat', Sound:'Cat', Text:'Cat'} })
      this.setState({indices: {imageIndex: 0, soundIndex: 0, textIndex: 0} })
      this.setState({selectedTab: 1})
    }
  }

  componentDidUpdate = () => {
    this.saveStateToLocalStorage(JSON.stringify(this.state))
  }

  
  render() {
    //console.log(this.state)
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
