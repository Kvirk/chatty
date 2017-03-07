import React, {Component} from 'react';

class Messagelist extends Component {
  render() {
    console.log("Rendering <Messagelist/>");
    return (
        <div className="message">
          <span className="message-username">Anonymous1</span>
          <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>
    );
  }
}
export default Messagelist;
