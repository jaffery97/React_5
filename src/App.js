import React, {
  Component
} from 'react';

class Ticker extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  //LifeCycle methods
  componentDidMount() {

    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    //this is where we check it's true or false using while
    while(nextState.count % 3 === 0) return true;
  }

  reset = () => {
    this.setState({
      count: this.state.count = 0
    })
  }

  //this is a custom method
  render() {
    return ( < div className = "main" > < p className = "ticker" > This ticker number is: {
        this.state.count
      } < /p>



      <
      button type = "button"
      onClick = {
        this.reset
      }
      className = "reset" > Reset < /button>


      <
      /div>



    );

  };
};

export default Ticker;
