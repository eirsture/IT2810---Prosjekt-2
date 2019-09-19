import React from 'react';
import "./ButtonRow.css";
import "./Button.css"

class ButtonRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedButton: 1,
        }
    }


    handleButtonPress = (event) => {
        this.setState({selectedButton: parseInt(event.currentTarget.id)})
        this.props.selectedTab(parseInt(event.currentTarget.id))
        this.saveToLocalStorage(event.currentTarget.id)
    }

    saveToLocalStorage = (id) => {
        localStorage.setItem('selectedTab', id)
    }

    componentDidMount = () => {
        const locallyStoredId = localStorage.getItem('selectedTab')
        if (locallyStoredId) {
            this.setState({ selectedButton: locallyStoredId})
        }
        console.log(locallyStoredId)
    }

    render() {
        console.log(this.state.selectedButton)
    return (
        <div className="buttons">{
            [1,2,3,4].map(key => 
            <div 
                key= {key}
                id = {key}
                className={key === this.state.selectedButton ? "selected button" : "hidden button"}
                onClick={this.handleButtonPress}
            >
                <p className="title">
                    {key}
                </p>
            </div>
        )
        }
        </div>
    );
    }
}

export default ButtonRow;