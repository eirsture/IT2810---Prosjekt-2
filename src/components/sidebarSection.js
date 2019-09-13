import React from 'react';
import './sidebarSection.css';

class SidebarSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategory: this.props.categories[0]
        }
    }

    categoryChanged = (e) => {
        this.setState({ selectedCategory: e.currentTarget.value})
    }
    
    render() {
        return(
            <div className="sectionContainer">
                <h3>{this.props.title}</h3>
                <div className="separator"/>
                <form>
                    {
                        this.props.categories.map((category, index) => {
                            return  <div className="radio">
                                        <label>
                                        <input type="radio" 
                                            value={category}
                                            checked={this.state.selectedCategory === category}
                                            onChange={this.categoryChanged}
                                        />
                                        <span className="radioButton"></span>
                                        {category}
                                        </label>
                                    </div>
                        })
                    }
                </form>
            </div>
        )
    }
}

export default SidebarSection;