
;

const Tabs = ({ tabs, type, fade }) => {

  const renderTabs = () => {
    return tabs.map((tab, index) => {
      const isActive = index === 0;
      return (
        <li className="nav-item" role="presentation" key={tab.id}>
          <a 
            className={`nav-link ${isActive ? 'active' : ''}`} 
            data-bs-toggle="tab" 
            href={`#${tab.id}`} 
            role="tab" 
            aria-selected={isActive}
            tabIndex={isActive? "" : -1}
          >
            {tab.title}
          </a>
        </li>
      )
    });
  }

  const renderPanes = () => {
    return tabs.map((tab,index) => {
      const isActive = index === 0;
      return (
        <div 
          className={`tab-pane ${isActive ? 'active show' : ''} ${fade ? 'fade' : ''}`}
          id={tab.id}
          role="tabpanel"
          aria-labelledby={tab.id}
          tabIndex={tab.id}
          key={tab.id}
        >
          {tab.content}
        </div>
      )
    })
  }

  return (
    <div className={type === 'left' || type === 'right' ? `tabs-${type}` : 'tab-default'}>
      {/* Nav Tabs */}
      <ul 
        className={`nav nav-tabs ${type === 'justified' ? 'nav-justified' : ''} ${type === 'left' || type === 'right' ? 'flex-column' : ''}`}
        role="tablist"
      >
        {renderTabs()}
      </ul>

      {/* Tab Panes */}
      <div className="tab-content">
        {renderPanes()}
      </div>

    </div>
  );
}

export default Tabs;
