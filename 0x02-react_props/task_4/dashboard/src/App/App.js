import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

const App = ({ isLoggedIn }) => {
  let component = undefined;
  isLoggedIn ? (component = <CourseList />) : (component = <Login />);
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {component}
        <Footer />
      </div>
    </React.Fragment>
  );
};

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
