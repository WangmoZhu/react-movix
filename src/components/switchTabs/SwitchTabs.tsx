import React, {useState} from 'react'
import './style.scss'

const SwitchTabs = ({data, onTabChange}: any) => {
  const [selectedTab, setSelectTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab: any, index: any) => {
    setLeft(index * 100)
    setTimeout(() => {
      setSelectTab(index)
    }, 300);
    
    onTabChange(tab, index)
  }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab: any, index: any) => (
          <span 
            key={index} 
            className={`tabItem ${selectedTab === index ? 'active' : ''}`}
            onClick={() => activeTab(tab, index)}>
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{left: left}}></span>
      </div>
    </div>
  )
}

export default SwitchTabs