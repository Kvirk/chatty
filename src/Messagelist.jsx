import React, {Component} from 'react';
import Message from './Message.jsx';


class Messagelist extends Component {
  render() {
    console.log("Rendering <Messagelist/>");
    let message = [];
    for(let i = 0; i < this.props.messages.length; i++){
      message.push(<Message key={i} className={this.props.messages[i].className}
        username={this.props.messages[i].username} content={this.props.messages[i].content}/>)
    }
    return (
        <main className="messages">
          {message}
        </main>
    );
  }
}

Messagelist.defaultProps = {
  messages: [
    {
      username: "Bob",
      content: "Test",
    },
    {
      username: "Anonymous",
      content: "Test"
    }
  ]
}
export default Messagelist;
