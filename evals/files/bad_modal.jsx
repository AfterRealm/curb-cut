import React, { useState } from 'react';

function ConfirmDialog({ isOpen, onConfirm, onCancel, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="overlay" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', zIndex: 1000
    }}>
      <div className="modal" style={{
        background: 'white', borderRadius: 8, padding: 24,
        maxWidth: 400, margin: '100px auto'
      }}>
        <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>
          {title}
        </div>
        <div style={{ marginBottom: 24, color: '#666' }}>
          {message}
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <div
            className="btn btn-cancel"
            onClick={onCancel}
            style={{ padding: '8px 16px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: 4 }}
          >
            Cancel
          </div>
          <div
            className="btn btn-confirm"
            onClick={onConfirm}
            style={{ padding: '8px 16px', cursor: 'pointer', background: '#dc3545', color: 'white', borderRadius: 4 }}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <div onClick={() => setShowDialog(true)} style={{ color: 'blue', cursor: 'pointer' }}>
        Delete Account
      </div>
      <ConfirmDialog
        isOpen={showDialog}
        title="Delete Account"
        message="This action cannot be undone. All your data will be permanently removed."
        onConfirm={() => { /* delete logic */ setShowDialog(false); }}
        onCancel={() => setShowDialog(false)}
      />
    </div>
  );
}

export default App;
