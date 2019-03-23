import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = (e)=>{
    console.log(this.state.tweet)
    this.setState({
      tweet: e.target.value
    })

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <h3>{this.props.maxChars - this.state.tweet.length}</h3>
        <input name="tweet" onChange= {this.handleChange} type="text" value={this.state.tweet}/>
      </div>
    );
  }
}

export default TwitterMessage;
