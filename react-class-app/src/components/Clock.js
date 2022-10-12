import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      intervalId: null,
    };
  }

  render() {
    const { state } = this;
    const { date } = state;
    return <div>{date.toLocaleTimeString()}</div>;
  }

  componentDidMount() {
    console.log('Clock componentWillMount');
    const intervalId = setInterval(() => {
      console.log('Clock tick');
      this.setState({ date: new Date() });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    console.log('Clock componentWillUnmount');
    const { state } = this;
    const { intervalId } = state;
    if(intervalId != null) {
      console.log('clearInterval');
      clearInterval(intervalId);
    }
  }
}
export default Clock;
