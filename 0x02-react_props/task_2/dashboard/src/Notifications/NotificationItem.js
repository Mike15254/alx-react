import React from 'react';

function NotificationItem({ type, html, value }) {
  let li;

  value
    ? (li = (
        <li data-priority="default" data-notification-type={type}>
          {value}
        </li>
      ))
    : (li = (
        <li
          data-priority="urgent"
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
        ></li>
      ));

  return li;
}

export default NotificationItem;
