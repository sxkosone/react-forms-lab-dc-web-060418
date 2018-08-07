import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      // remainingChars: props.maxChars
      
    };
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => this.handleTextChange(event)} type="text" value={this.state.text}/>
        <p>Remaining characters: {this.props.maxChars-this.state.text.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
