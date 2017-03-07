import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Messagelist from './Messagelist.jsx';

var chars;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
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
                };
    this.submit = this.submit.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  submitName(key) {
    if(key.charCode === 13){
      this.setState({currentUser: {name: key.target.value}});
      key.target.value = '';
    }
  }

  submit(key) {
    if(key.charCode === 13){
      const newMessage = {username: this.state.currentUser.name, content: key.target.value};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages})
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