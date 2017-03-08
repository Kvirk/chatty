import React, {Component} from 'react';


class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    let style = {color: this.props.color}
    let urlReg = /(https?:\/\/[^\s]+(.jpg|.png))/g;
    let match = urlReg.exec(this.props.content);
    let content = this.props.content.replace(urlReg, "");
    let url = "";
    if (match !== null){
      url = match[0];
    }
    if(url === ""){
      return (
          <div className="message">
            <span style={style} className="message-username">{this.props.username}</span>
            <span className="message-content">{content}</span>
          </div>
      );
    }
    return (
        <div className="message">
          <span style={style} className="message-username">{this.props.username}</span>
          <div className="img">
            <span className="message-content">{content}</span>
            <img src={url}/>
          </div>
        </div>
    );
  }
}

Message.defaultProps = {
    "name": "No Name",
    "content": "No Content"
};

export default Message;
