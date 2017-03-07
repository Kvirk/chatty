import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Messagelist from './Messagelist.jsx';

var messages = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}

class App extends Component {
  render() {
    console.log("Rendering <App/>");
    return ( <div><nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <Messagelist messages={messages.messages}/>
      <Chatbar name = {messages.currentUser.name}/>
      </div>
      );
  }
}
export default App;