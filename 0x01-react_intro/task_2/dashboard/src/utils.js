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

const getLatestNotification = () => {
  return (
    <p>
      <strong>Urgent requiremnt</strong> - complete by EOD
    </p>
  );
};

export { getLatestNotification };
