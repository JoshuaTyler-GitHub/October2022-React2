// node_modules
import React, { Component } from 'react';

// components
import Welcome from '../components/Welcome';

// constants
const BUTTON_COLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const INITIAL_USERS = {
  oiyuuoisagfdhbkm: {
    name: 'John',
    age: 20,
  },
  GSDGSDFHASDF: {
    name: 'Jacob',
    age: 44,
  },
  hsdfhsdfhsdfh: {
    name: 'JingleHeimerSchmitt',
    age: 96,
  },
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: BUTTON_COLORS[0],
      counterValue: undefined,
      isUsersTableActive: false,
      users: { ifhjkhsda: 'sdfjhsadfklas' },
    };
  }

  render() {
    const { state } = this;
    const { buttonColor, counterValue, isUsersTableActive, users } = state;

    const isUsersTablePopulated = Boolean(Object.keys(users).length > 0);

    return (
      <div className={'container-fluid'}>
        <div className={'row'}>

          {/* Welcome messages */}
          <div className={'col-12'}>
            <Welcome favoriteColor={'red'} name={'Name1'} />
            <Welcome favoriteColor={'blue'} name={'Name2'} />
            <Welcome favoriteColor={'green'} name={'Name3'} />
          </div>

          {/* Random Button Color */}
          <div className={'col-4'}>
            <button
              className={`btn btn-${buttonColor}`}
              onClick={() => this.handleRandomButtonColorClick()}
            >
              Click me!
            </button>
          </div>

          {/* Toggle User Display */}
          <div className={'col-4'}>
            <button
              className={`btn btn-${buttonColor}`}
              onClick={() => this.handleUsersToggleClick()}
            >
              Toggle Users
            </button>
          </div>

          {/* Random Button Color */}
          <div className={'col-4'}>
            <button
              className={`btn btn-${buttonColor}`}
              onClick={() => this.handleCounterClick()}
            >
              {`Increment Counter: ${counterValue}`}
            </button>
          </div>

          {/* Counter */}
          <div className={'col-12'}>
            {counterValue
              ? 'counter value is true'
              : 'counter value is false'
            }
          </div>

          {/* User Tables */}
          <div className={'col-12'}>
            {Object.keys(users).length
              ? Object.keys(users).length
              : 'Users table is hidden'
            }
          </div>

        </div>
      </div>
    );
  }

  handleCounterClick() {
    const { state } = this;
    const { counterValue } = state;
    const isCounterANumber = Boolean(!isNaN(counterValue));
    const counterValuePlusOne = isCounterANumber
      ? counterValue + 1
      : 'counterValue is not a number';
    this.setState({ counterValue: counterValuePlusOne });
  }

  handleRandomButtonColorClick() {
    const newRandomColor = BUTTON_COLORS[Math.floor(Math.random() * BUTTON_COLORS.length)];
    this.setState({ buttonColor: newRandomColor });
  }

  handleUsersToggleClick() {
    const { state } = this;
    const { isUsersTableActive } = state;
    this.setState({ isUsersTableActive: !isUsersTableActive });
  }
}
export default HomePage;
