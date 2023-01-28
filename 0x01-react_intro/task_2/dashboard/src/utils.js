export function getFullYear() {
  return new Date().getFullYear();
}

export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
};

export const getLatestNotification = () => {
  return '<strong>Urgent requiremnt</strong> - complete by EOD';
};
