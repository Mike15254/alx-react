import React from 'react';
import PropTypes from 'prop-types';

// A function declaration that takes three arguments 'type', 'html', and 'value' 
function NotificationItem({ type, html, value }) {
  // Declare a variable li
  let li;

  // If the value is not null, assigns an HTML li item with 'data-priority' attribute set to 'default', 'data-notification-type' set to the passed in 'type' and display its 'value'
  value ? (li = <li data-priority='default' data-notification-type={type}>{value}</li>)

  //If the value attribute is null, assigns an HTML li item with 'data-priority' attribute set to 'urgent', 'data-notification-type' set to the passed in 'type', and displays the raw HTML from the 'html' attribute. It must be used cautiously because it can expose your application to XSS vulnerabilities.
    : (li = (<li data-priority='urgent' data-notification-type={type} dangerouslySetInnerHTML={html}></li>));

  // Return the final HTML element constructed based on input values
  return li;
}


NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
