import React from 'react'; 

class CategorySelector extends React.Component {
    render() {
        return(
            <div className="categoryContainer">
                <div className="category1"><h4>Category 1</h4></div>
                <div className="category2"><h4>Category 2</h4></div>
                <div className="category3"><h4>Category 3</h4></div>
            </div>
        )
    }
}

export default CategorySelector;