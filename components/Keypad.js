import React from 'react' // import react

class Keypad extends React.Component {
  constructor() {
    super()
    this.consoleOutput = this.consoleOutput.bind(this);
  }

  consoleOutput() {
    console.log('Entering password...');
  }

  render(){
    return(
      <input type="password" onKeyUp={this.consoleOutput} />
    );
  };
}

export default Keypad;

// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'
