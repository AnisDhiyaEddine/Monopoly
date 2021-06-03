import React from "react";
export default class App extends React.Component {
    state = {
        timestamp: 'no timestamp yet'
    };


      render() {
        return (
          <div className="Card">
              This is a card
          </div>
        );
      }
}