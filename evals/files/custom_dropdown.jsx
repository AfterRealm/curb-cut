import React, { useState } from 'react';

function Dropdown({ options, placeholder, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="dropdown-wrapper">
      <div
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: '1px solid #ccc',
          padding: '8px 12px',
          borderRadius: 4,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: 200
        }}
      >
        <span style={{ color: selected ? '#333' : '#999' }}>
          {selected ? selected.label : placeholder}
        </span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu" style={{
          border: '1px solid #ccc',
          borderTop: 'none',
          borderRadius: '0 0 4px 4px',
          maxHeight: 200,
          overflowY: 'auto'
        }}>
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                onChange?.(option);
              }}
              style={{
                padding: '8px 12px',
                cursor: 'pointer',
                background: selected?.value === option.value ? '#e8f0fe' : 'white'
              }}
              onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.background = selected?.value === option.value ? '#e8f0fe' : 'white'}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 8 }}>Country</div>
      <Dropdown
        options={countries}
        placeholder="Select a country"
        onChange={(opt) => console.log('Selected:', opt)}
      />
    </div>
  );
}

export default App;
