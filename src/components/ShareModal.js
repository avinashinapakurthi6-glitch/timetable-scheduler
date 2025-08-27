import React from 'react';

const ShareModal = ({ open, onClose, scheduleId }) => {
  if (!open) return null;
  const url = `${window.location.origin}${window.location.pathname}?id=${scheduleId}`;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied!');
  };
  return (
    <div style={{
      position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99
    }}>
      <div style={{ background: '#fff', padding: '2em', borderRadius: 8, minWidth: 300 }}>
        <h3>Share Your Schedule</h3>
        <input value={url} readOnly style={{ width: '100%', marginBottom: '1em' }} />
        <button onClick={copyToClipboard} style={{ marginRight: '1em' }}>Copy Link</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ShareModal;