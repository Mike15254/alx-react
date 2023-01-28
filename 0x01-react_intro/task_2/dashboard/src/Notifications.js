import React from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';
import './Notifications.css';

export function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          color: '#3a3a3a',
          fontWeight: 'bold',
          background: 'none',
          border: 'none',
          fontSize: '15px',
          position: 'absolute',
          right: '9px',
          top: '9px',
          margin: '2rem',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={(e) => {
          console.log('Close button has been clicked');
        }}
      >
        <img src={closeIcon} alt="closeicon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent"> New resumw available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
