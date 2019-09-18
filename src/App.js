import React from 'react'
import './App.css'
import Sidebar from './components/sidebarContent'
import ButtonRow from './components/ButtonRow'
import Display from './components/Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenCategories: {Image:'', Sound:'', Text:''}
    }
    this.selectedCategory = this.selectedCategory.bind(this)
  }

  selectedCategory = (mediaType, category) => {  
    if (mediaType === "Image") {
      this.setState({chosenCategories: {...this.state.chosenCategories, Image:category}})
    } else if (mediaType === "Sound") {
      this.setState({chosenCategories: {...this.state.chosenCategories, Sound:category}})
    } else if (mediaType === "Text") {
      this.setState({chosenCategories: {...this.state.chosenCategories, Text:category}})
    }
  }

  componentDidUpdate= () => {
    console.log(this.state.chosenCategories)
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
          <Display textIndex={2}/>
        </div>
        <div className="button-section">
            <ButtonRow />
        </div>
        <div className="footer">
          <h4>Footer</h4>
        </div>
      </div>
    )
  }
}

export default App;
