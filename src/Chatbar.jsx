import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.submitName = this.submitName.bind(this);
  }
  submitName(key) {
    if (key.charCode === 13) {
      if (key.target.value !== '') {
        const newName = key.target.value;
        key.target.value = '';
        return this.props.sendName(newName);
      }
    }
  }
  submit(key) {
    if (key.charCode === 13) {
      const newMessage = key.target.value;
      key.target.value = '';
      return this.props.sendMessage(newMessage);
    }
  }
  render() {
    console.log("Rendering <Chatbar/>");
    return (
      <footer className="chatbar">
        <input onKeyPress={this.submitName} className="chatbar-username" placeholder={this.props.name} />
        <input onKeyPress={this.submit} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default Chatbar;
