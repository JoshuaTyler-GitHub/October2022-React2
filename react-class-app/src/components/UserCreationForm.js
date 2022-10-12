import { Component } from 'react';

class UserCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      favoriteColor: '',
      name: '',
    };
  }

  render() {
    const { props, state } = this;
    const { onCreateNewUser} = props;
    const { age, favoriteColor, name } = state;

    return (
      <div className={'col-12'}>
        <form className={'bg-primary card form-group text-light'}>
          <div className={'card-header'}>
            <h1>Create User</h1>
          </div>

          <div className={'card-body'}>
            <label className={'control-label'}>Age</label>
            <input
              className={'form-control'}
              value={age}
              onChange={(e) => this.handleUserAge(e)}
            />
            <label className={'control-label'}>Favorite Color</label>
            <input
              className={'form-control'}
              value={favoriteColor}
              onChange={(e) => this.handleUserFavoriteColor(e)}
            />
            <label className={'control-label'}>Name</label>
            <input
              className={'form-control'}
              value={name}
              onChange={(e) => this.handleUserName(e)}
            />
          </div>
        </form>

        <button
          className='btn btn-success mt-3'
          onClick={() => onCreateNewUser({ age, favoriteColor, name })}
        >
          Create User
        </button>
      </div>
    );
  }

  handleUserAge(event) {
    const { target } = event;
    const { value } = target;
    this.setState({ age: value });
  }

  handleUserFavoriteColor(event) {
    const { target } = event;
    const { value } = target;
    this.setState({ favoriteColor: value });
  }

  handleUserName(event) {
    const { target } = event;
    const { value } = target;
    this.setState({ name: value });
  }
}
export default UserCreationForm;
