import React, { useState, useRef, useCallback } from 'react';

function Tabs({ tabs, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const tabRefs = useRef([]);

  const handleKeyDown = useCallback((e, index) => {
    let newIndex;
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        newIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    setActiveIndex(newIndex);
    tabRefs.current[newIndex]?.focus();
  }, [tabs.length]);

  return (
    <div>
      <div role="tablist" aria-label="Content sections">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            ref={el => tabRefs.current[index] = el}
            aria-selected={index === activeIndex}
            aria-controls={`panel-${tab.id}`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`tab ${index === activeIndex ? 'tab-active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={index !== activeIndex}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

function App() {
  const tabData = [
    { id: 'overview', label: 'Overview', content: <p>Product overview and key features.</p> },
    { id: 'specs', label: 'Specifications', content: <p>Technical specifications and requirements.</p> },
    { id: 'reviews', label: 'Reviews', content: <p>Customer reviews and ratings.</p> },
  ];

  return (
    <main>
      <h1>Product Details</h1>
      <Tabs tabs={tabData} />
    </main>
  );
}

export default App;
