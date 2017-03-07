import React, {Component} from 'react';
import Messagelist from './Messagelist.jsx';


class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    return (
        <main className="messages">
          <Messagelist/>
        </main>
    );
  }
}
export default Message;
