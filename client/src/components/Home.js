import React from "react";
export default class App extends React.Component {
    state = {
        timestamp: 'no timestamp yet'
    };


      render() {
        return (
          <div className="Home">
              This is the home page
          </div>
        );
      }
}