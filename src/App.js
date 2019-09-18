import React from 'react'
import './App.css'
import Sidebar from './components/sidebarContent'
import ButtonRow from './components/ButtonRow'
import Display from './components/Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenCategories: []
    }
    this.selectedCategory = this.selectedCategory.bind(this)
  }

  selectedCategory = (mediaType, category) => {
      console.log(mediaType, category)
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
          
          <ButtonRow />
        </div>
        <div className="footer">
          <h4>Footer</h4>
        </div>
        <div className="button-section">
          <ButtonRow/>
        </div>
        <div className="footer">
          <h4>Footer</h4>
        </div>
      </div>
    )
  }
}

export default App;
