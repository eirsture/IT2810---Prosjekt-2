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
        this.props.selectedCategory(this.props.title, e.currentTarget.value)
        this.saveToLocalStorage(e.currentTarget.value)
    }

    saveToLocalStorage = (category) => {
        localStorage.setItem(this.props.title, category)
    }

    componentDidMount() {
        const locallyStoredCategory = localStorage.getItem(this.props.title)
        if (locallyStoredCategory) {
            this.setState({ selectedCategory: locallyStoredCategory})
        }

    }
    
    render() {
        return(
            <div className="sectionContainer">
                <h3>{this.props.title}</h3>
                <form>
                    {
                        this.props.categories.map((category, index) => {
                            return  <div className={this.state.selectedCategory === category ? "radio active" : "radio"}>
                                        <label>
                                        <input type="radio" 
                                            value={category}
                                            checked={this.state.selectedCategory === category}
                                            onChange={this.categoryChanged}
                                        />
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