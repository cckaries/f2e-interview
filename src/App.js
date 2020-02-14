import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: Number(localStorage.getItem('count') || 0),
    x: null,
    y: null,
  }

  handleMouseMove = e => {
    this.setState(prevState => ({
      ...prevState,
      x: e.pageX,
      y: e.pageY,
    }));
  }
  onCount = digit => {
    this.setState(prevState => ({
      ...prevState,
      count: this.state.count + digit,
    }), () => localStorage.setItem('count', this.state.count));
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = count;
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    const { count, x, y } = this.state;
    return (
      <div className="App">
        count: {count}
        <button onClick={() => this.onCount(1)}>+1</button>
        <button onClick={() => this.onCount(-1)}>-1</button>
        <br />
        <div>x: {x}</div>
        <div>y: {y}</div>
      </div>
    )
  }
}

export default App;
