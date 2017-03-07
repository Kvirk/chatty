import React, {Component} from 'react';
import Messagelist from './Messagelist.jsx';


class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    let message;
    return (
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
    );
  }
}

Message.defaultProps = {
    "username": "No Name",
    "content": "No Content"
  };
export default Message;
