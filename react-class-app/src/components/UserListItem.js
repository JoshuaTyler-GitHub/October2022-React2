import{ Component } from 'react';

class UserListItem extends Component {
  render() {
    const { props } = this;
    const { children, userId, } = props;
    return (
      <li className={'list-item'} key={userId}>
        {children}
      </li>
    )
  }
}
export default UserListItem;
