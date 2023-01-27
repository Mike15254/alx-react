import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div>
      <div className="Notifications">
        <button
          style={{
            color: '#3a3a3a',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            fontSize: '15px',
            position: 'absolute',
            right: '2px',
            top: '2px',
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
            dangerouslySetInnerHTML={{ _html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
    </div>
  );
}
