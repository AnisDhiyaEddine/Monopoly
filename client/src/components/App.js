import React from "react";
import {subscribeToTimer} from "../api/socketClient"
export default class App extends React.Component {
    state = {
        timestamp: 'no timestamp yet'
    };

    constructor(props) {
        super(props);
        subscribeToTimer((err, timestamp) => {
            //console.log(timestamp)
            this.setState({ 
            timestamp 
          })
        });
      }

      render() {
        return (
          <div className="App">
            <p className="App-intro">
            Hello to check server status ... Look at the console
            </p>
          </div>
        );
      }
}