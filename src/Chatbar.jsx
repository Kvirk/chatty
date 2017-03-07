import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    console.log("Rendering <Chatbar/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

Chatbar.defaultProps = {name: 'Anonymous1'};

export default Chatbar;
