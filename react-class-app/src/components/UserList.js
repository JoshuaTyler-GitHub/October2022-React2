import{ Component } from 'react';

// components
import UserListItem from './UserListItem';

class UserList extends Component {
  render() {
    const { props } = this;
    const { users } = props;
    return (
      <div className={'col-12'}>
      <ul className={'list-item-group'}>
        {Object.entries(users).map(([userId, user]) => (
          <UserListItem key={userId} userId={userId}>
            <span>{JSON.stringify(user)}</span>
          </UserListItem>
        ))}
      </ul>
    </div>
    )
  }
}
export default UserList;
