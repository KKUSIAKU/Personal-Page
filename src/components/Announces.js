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
    this.time = 3000;
    this.timer;
    this.numberOfMessasge = this.props.messages.length;

    this.changeStateText = this.changeStateText.bind(this);
    this.initialiseState = this.initialiseState.bind(this);

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
        text: this.props.messages[0],
        textIndex: 0,
      });
    }
  }

  changeStateText() {

    let index;
    try {
      index = parseInt(this.state.textIndex);
      if (index < this.numberOfMessasge - 1) {
        this.setState({
          text: this.props.messages[index + 1],
          textIndex: index + 1
        });
      }
      else {
        this.setState({
          text: this.props.messages[0],
          textIndex: 0
        });
      }

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

  clearTimer() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        <Text text={this.state.text} />
      </div>
    );
  }
}

Announces.propTypes = {
  messages:PropTypes.arrayOf(PropTypes.string).isRequired
};



export default Announces;