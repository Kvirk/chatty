import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Messagelist from './Messagelist.jsx';


var chars;

class App extends Component {
  constructor(props) {
    super(props);
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

    this.state = {currentUser: {name: "Guest"}, color: "#FFFFFF", numUsers: 0, messages: [] };
    this.submit = this.submit.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  submitName(key) {
    if(key.charCode === 13){
      if(key.target.value !== ''){
        const newMessage = {"type": "username change", content: `${this.state.currentUser.name} has changed their name to ${key.target.value}`};
        this.webSocket.send(JSON.stringify(newMessage));
        this.setState({currentUser: {name: key.target.value}});
        key.target.value = '';
      }
    }
  }

  submit(key) {
    if(key.charCode === 13){
      const newMessage = {"type": "postMessage", color: this.state.color, username: this.state.currentUser.name, content: key.target.value};
      this.webSocket.send(JSON.stringify(newMessage));
      key.target.value = '';
    }
  }

  render() {
    console.log("Rendering <App/>");
    return ( <div><nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <h4>{this.state.numUsers} users online</h4>
      </nav>
      <Messagelist messages={this.state.messages}/>
      <Chatbar submit={this.submit} submitName={this.submitName} name = {this.state.currentUser.name}/>
      </div>
      );
  }
}
export default App;