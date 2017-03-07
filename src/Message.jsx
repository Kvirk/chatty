import React, {Component} from 'react';
import Messagelist from './Messagelist.jsx';


class Message extends Component {
  render() {
    return (
        <main className="messages">
          <Messagelist/>
        </main>
    );
  }
}
export default Message;
