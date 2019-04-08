import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e)=>{
    console.log(this.state.message)
    this.setState({
      message: e.target.value
    })

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <h3>{this.props.maxChars - this.state.message.length}</h3>
        <input name="message" onChange= {this.handleChange} type="text" value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
