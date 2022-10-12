// node_modules
import React, { Component } from 'react';

// pages
import AdminUsersPage from './pages/AdminUsersPage';
import HomePage from './pages/HomePage';

// styles
import './styles/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const path = window.location.pathname;
    const isHomePage = path === '/';
    const isAdminUsersPage = path === '/admin/users';

    return (
      <>
        {/* Home Page */}
        {isHomePage && <HomePage />}

        {/* Admin Users Page */}
        {isAdminUsersPage && <AdminUsersPage />}
      </>
    );
  }
}
export default App;
