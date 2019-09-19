import React from 'react'
import './App.css'
import Sidebar from './components/sidebarContent'
import ButtonRow from './components/ButtonRow'
import Display from './components/Display'

class App extends React.Component {

  expandSidebar = () => {
    var sidebar = document.getElementById("sidebar");
    var sidebarButton = document.getElementById("sidebarButton");
    var burgerButton = document.getElementById("closeButton");
    sidebar.style.display = "inline";
    burgerButton.style.display = "inline";
    sidebarButton.style.display = "none";
    
  }

  closeSidebar = () => {
    var sidebar = document.getElementById("sidebar");
    var sidebarButton = document.getElementById("sidebarButton");
    var closeButton = document.getElementById("closeButton");
    sidebar.style.display = "none";
    closeButton.style.display = "none";
    sidebarButton.style.display = "inline";

    sidebarButton.style.cssText = '';
    sidebar.style.cssText = '';
  }



  constructor(props) {
    super(props)
    this.state = {
      chosenCategories: {Image:'', Sound:'', Text:'' },
      indices: {imageIndex: 0, soundIndex: 0, textIndex: 0},
      selectedTab: 1
    }
  }

  generateTab = () => {
    const currentImageIndex = this.state.indices.imageIndex
    let newImageIndex = this.generateRandomIndex()
    while (newImageIndex === currentImageIndex) {
      newImageIndex = this.generateRandomIndex()
    }

    const currentTextIndex = this.state.indices.textIndex
    let newTextIndex = this.generateRandomIndex()
    while (newTextIndex === currentTextIndex) {
      newTextIndex = this.generateRandomIndex()
    }

    const currentSoundIndex = this.state.indices.soundIndex
    let newSoundIndex = this.generateRandomIndex()
    while (newSoundIndex === currentSoundIndex) {
      newSoundIndex = this.generateRandomIndex()
    }

    this.setState({indices: {...this.state.indices, imageIndex: newImageIndex, textIndex: newTextIndex, soundIndex: newSoundIndex}})
  }

  generateRandomIndex = () => {
    return Math.floor(Math.random() * 4)
  }

  selectedTab = (tab) => {
    if (tab !== this.state.selectedTab) {
      this.setState({selectedTab: tab})
      this.generateTab()
      this.saveStateToLocalStorage(this.state)
    }
  }

  selectedCategory = (mediaType, category) => {  
    sessionStorage.clear()
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
        <header id="header">
          <div id="sidebarButton" onClick={this.expandSidebar} >
            <svg width="40" height="40" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.195312H20.4286V2.36198H0V0.195312ZM0 5.61198H20.4286V7.77865H0V5.61198ZM0 11.0286H20.4286V13.1953H0V11.0286Z" fill="#686B6F"/>
            </svg>
          </div>
          <div id="closeButton" onClick={this.closeSidebar}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 14.6053L25.59 13.1953L20 18.7853L14.41 13.1953L13 14.6053L18.59 20.1953L13 25.7853L14.41 27.1953L20 21.6053L25.59 27.1953L27 25.7853L21.41 20.1953L27 14.6053Z" fill="#CF2A2A"/>
            </svg>
          </div>
          <h2>header</h2>
        </header>
        <div id="sidebar">
          <Sidebar categories={["Cat", "Dog", "Horse"]} selectedCategory={this.selectedCategory} />
        </div>
        <div id="content">
          <Display 
            textIndex={this.state.indices.textIndex} 
            textCategory={this.state.chosenCategories.Text} 
            SVGIndex={this.state.indices.imageIndex}
            SVGCategory={this.state.chosenCategories.Image} 
            audioIndex={this.state.indices.soundIndex}
            audioCategory={this.state.chosenCategories.Sound}
            tabId={this.state.selectedTab}
          />
        </div>
        <div id="button-section">
          <ButtonRow selectedTab={this.selectedTab} />
        </div>
        <div id="footer">
          <h4>Footer</h4>
        </div>
      </div>
    )
  }
}

export default App;
