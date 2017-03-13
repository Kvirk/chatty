import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';



class Messagelist extends Component {
  render() {
    console.log("Rendering <Messagelist/>");
    return (
        <main className="messages">
          {this.props.messages.map((x, i) => {
            switch(x.type){
              case "postMessage":
                return <Message key={x.id} color={x.color} className={x.className} username={x.username} content={x.content}/>;
                break;
              case "username change":
                return <Notification key={x.id} content={x.content}/>;
                break;
            }
          })}
        </main>
    );
    this.props.messages.map((x) => {
      return <Message key={i} className={x.className}
        username={x.username} content={x.content}/>
    })

  }
}

export default Messagelist;
