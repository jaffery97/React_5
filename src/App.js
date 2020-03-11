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
    //this is where we check it's true or false using if else

    if (nextState.count % 3 === 0) {return true;}
    else {
      return false;
    }

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


      <h1 className="footer"> <hr style={{
          height: .5,
          width: 230,
          borderColor : 'red'
      }}/> React_5 Project | Copyright @ <a href="https://mhjafory.com"> MH Jafory </a></h1>

      </div>



    );

  };
};

export default Ticker;

  //while(nextState.count % 3 === 0) return true;
