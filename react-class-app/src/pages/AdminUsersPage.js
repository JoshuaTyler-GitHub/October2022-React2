// node_modules
import React, { Component } from 'react';

// components
import UserCreationForm from '../components/UserCreationForm';
import UserList from '../components/UserList';

// services
import UsersService from '../services/UsersService';

class AdminUsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
  }

  render() {
    const { state } = this;
    const { users } = state;

    return (
      <div className={'container-fluid'}>
        <div className={'row'}>

          {/* Users List */}
          <UserList users={users}/>

          {/* User Creation Form */}
          <UserCreationForm
            onCreateNewUser={(newUser) => this.handleCreateNewUser(newUser)}
          />

        </div>
      </div>
    );
  }

  componentDidMount() {
    this.handleGetUsers();
  }

  handleCreateNewUser(newUser) {
    UsersService.users = {
      ...UsersService.users,
      [Math.random().toString(36)]:  newUser,
    };
    console.log(UsersService.users);
    this.setState({ users: { ...UsersService.users }});
  }

  handleGetUsers = async () => {
    const users = await UsersService.getUsers();
    this.setState({ users });
  };
}
export default AdminUsersPage;
