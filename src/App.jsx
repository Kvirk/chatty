import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Messagelist from './Messagelist.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentUser: {name: "Guest"}, color: "#FFFFFF", numUsers: 0, messages: [] };
    this.sendName = this.sendName.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

  }

  componentDidMount() {
      this.webSocket =  new WebSocket("ws://localhost:4000");
      this.webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const messages = this.state.messages.concat(message);
      switch(message.type) {
        case "usersUpdate":
          this.setState({numUsers: message.value});
          break;
        case "color": {
          this.setState({color: message.value});
          break;
        }
        case "postMessage":
          this.setState({messages: messages});
          break;
        case "username change":
          this.setState({messages: messages});
          break;
       }
    }
  }

  sendName(name) {
    const newMessage = {"type": "username change", content: `${this.state.currentUser.name} has changed their name to ${name}`};
    this.webSocket.send(JSON.stringify(newMessage));
    this.setState({currentUser: {name: name}});
  }

  sendMessage(message) {
    console.log(message);
    const newMessage = {"type": "postMessage", color: this.state.color, username: this.state.currentUser.name, content: message};
    this.webSocket.send(JSON.stringify(newMessage));
  }

  render() {
    console.log("Rendering <App/>");
    return ( <div><nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <h4>{this.state.numUsers} users online</h4>
      </nav>
      <Messagelist messages={this.state.messages}/>
      <Chatbar sendName={this.sendName} sendMessage={this.sendMessage} name = {this.state.currentUser.name}/>
      </div>
      );
  }
}
export default App;