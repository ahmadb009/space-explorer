import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="tabs">
      <div className="tab-headers">
        {tabs.map(tab => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? 'active' : ''}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map(
          tab =>
            activeTab === tab.name && <div key={tab.name}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
