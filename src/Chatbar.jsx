import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Rendering <Chatbar/>");
    return (
      <footer className="chatbar">
        <input onKeyPress={this.props.submitName} className="chatbar-username" placeholder={this.props.name} />
        <input onKeyPress={this.props.submit} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

Chatbar.defaultProps = {name: 'Anonymous1'};

export default Chatbar;
