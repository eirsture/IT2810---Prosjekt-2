import React from 'react'
import SidebarSection from './sidebarSection'

const SidebarContent = ({ categories, selectedCategory }) => {
  return (
    <div className="wrapper">
      <div className="Image">
        <SidebarSection
          title="Image"
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="Text">
        <SidebarSection
          title="Text"
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="Sound">
        <SidebarSection
          title="Sound"
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  )
}

export default SidebarContent
