import React, {Component} from 'react';


class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    let style = {color: this.props.color}
    return (
        <div className="message">
          <span style={style} className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
    );
  }
}

Message.defaultProps = {
    "name": "No Name",
    "content": "No Content"
};

export default Message;
