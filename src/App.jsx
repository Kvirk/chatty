import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Messagelist from './Messagelist.jsx';


var chars;

class App extends Component {
  constructor(props) {
    super(props);
    this.webSocket =  new WebSocket("ws://localhost:4000");
    this.webSocket.onmessage = (event) => {
      var message = JSON.parse(event.data);
      const messages = this.state.messages.concat(message);
      this.setState({messages: messages})
    }

    this.state = {currentUser: {name: "Guest"}, messages: [] };
    this.submit = this.submit.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  submitName(key) {
    if(key.charCode === 13){
      if(key.target.value !== ''){
        this.setState({currentUser: {name: key.target.value}});
        key.target.value = '';
      }
    }
  }

  submit(key) {
    if(key.charCode === 13){
      const newMessage = {username: this.state.currentUser.name, content: key.target.value};
      this.webSocket.send(JSON.stringify(newMessage));
      key.target.value = '';
    }
  }

  render() {
    console.log("Rendering <App/>");
    return ( <div><nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <Messagelist messages={this.state.messages}/>
      <Chatbar submit={this.submit} submitName={this.submitName} name = {this.state.currentUser.name}/>
      </div>
      );
  }
}
export default App;