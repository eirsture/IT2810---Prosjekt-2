import React from 'react';
import SidebarSection from './sidebarSection';

class SidebarContent extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <div className="Image">
                    <SidebarSection title="Image" categories={this.props.categories} selectedCategory={this.props.selectedCategory}/>
                </div>
                <div className="Text">
                    <SidebarSection title="Text" categories={this.props.categories} selectedCategory={this.props.selectedCategory}/>
                </div>
                <div className="Sound">
                    <SidebarSection title="Sound" categories={this.props.categories} selectedCategory={this.props.selectedCategory}/>
                </div>
            </div>
        )
    }
}

export default SidebarContent;