import React, {Component} from 'react';
import Message from './Message.jsx';


class Messagelist extends Component {
  render() {
    console.log("Rendering <Messagelist/>");
    return (
        <main className="messages">
          {this.props.messages.map((x, i) => {
            return <Message key={x.id} className={x.className} username={x.username} content={x.content}/>;
          })}
        </main>
    );
    this.props.messages.map((x) => {
      return <Message key={i} className={x.className}
        username={x.username} content={x.content}/>
    })

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
