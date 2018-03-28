import React from "react";
import PropTypes from "prop-types";

import Text from "./Text.js";

class Announces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      textIndex: null,
      numberOfMessasge: 0
    };
    this.time = 8000;
    this.timer;
    this.numberOfMessasge = this.props.messages.length;

    this.changeStateText = this.changeStateText.bind(this);
    this.initialiseState = this.initialiseState.bind(this);
    this.clearTextState = this.clearTextState.bind(this);

  }

  componentDidMount() {
    this.initialiseState();
    this.setTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  initialiseState() {
    if (this.state.textIndex === null) {
      this.setState({

        text: <div className="slideInLeft" value={0}> <Text text={this.props.messages[0]} /></div>,
        textIndex: 0,
      });
    }
  }

  changeStateText() {

    let ctx = this, index;
    try {
      index = parseInt(this.state.textIndex);

      Promise.resolve()
        .then(() => ctx.clearTextState())
        .then(() => {
          if (index < ctx.numberOfMessasge - 1) {
            ctx.setState({
              text: <div className="slideInLeft" value={index}> <Text text={ctx.props.messages[index + 1]} /></div>,
              textIndex: index + 1
            });
          }
          else {
            ctx.setState({
              text: <div className="slideInLeft" value={0}> <Text text={ctx.props.messages[0]} /></div>,
              textIndex: 0
            });
          }
        });

    } catch (e) {
      // set only default message here
      this.setState({
        text: "I am JavaScript Developer",
      });
      this.clearTimer();
      // send back to database some info ...
    }

  }

  setTimer() {
    this.timer = setInterval(this.changeStateText, this.time);
  }

  clearTextState() {
    this.setState({
      text: "",
    });
  }

  clearTimer() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.text}
      </div>
    );
  }
}

Announces.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
};



export default Announces;