import React from 'react';
import '../styles/Tabs.css'
function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        onClick={() => setActiveTab('Resources')}
        className={activeTab === 'Resources' ? 'active' : ''}
      >
        Resources
      </button>
      <button
        onClick={() => setActiveTab('Requests')}
        className={activeTab === 'Requests' ? 'active' : ''}
      >
        Requests
      </button>
      <button
        onClick={() => setActiveTab('Users')}
        className={activeTab === 'Users' ? 'active' : ''}
      >
        Users
      </button>
    </div>
  );
}

export default Tabs;
