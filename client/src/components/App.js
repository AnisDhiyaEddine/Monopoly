import React from "react";
import {subscribeToTimer} from "../api/socketClient"
export default class App extends React.Component {
    state = {
        timestamp: 'no timestamp yet'
    };

    constructor(props) {
        super(props);
        console.log(props)
        subscribeToTimer((err, timestamp) => this.setState({ 
          timestamp 
        }));
      }

      render() {
        return (
          <div className="App">
            <p className="App-intro">
            This is the timer value: {this.state.timestamp}
            </p>
          </div>
        );
      }
}