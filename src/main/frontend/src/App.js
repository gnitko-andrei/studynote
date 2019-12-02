import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "This is a greeting"
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/greet").then(function(response) {
      return response.text();
    }).then((text) => {
      this.setState({greeting: text})
    });
  }

    render() {
        return (
            <div className="App">
                  <p>{this.state.greeting}</p>
            </div>
        );
    }


}

export default App;
