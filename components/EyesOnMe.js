import React from 'react' // import react

class EyesOnMe extends React.Component {
  constructor(){
    super()

    this.buttonAction = this.buttonAction.bind(this);
    this.focusAction = this.focusAction.bind(this);
    this.blurAction = this.blurAction.bind(this);
  }

  buttonAction() {
    console.log('hello sylvee!');
  }

  focusAction() {
    console.log('Good!');
  }

  blurAction() {
    console.log('Hey! Eyes on me!');
  }

  render(){
    return(
      <button onClick={this.buttonAction} onFocus={this.focusAction} onBlur={this.blurAction}>Button</button>
    );
  }
}

export default EyesOnMe;
