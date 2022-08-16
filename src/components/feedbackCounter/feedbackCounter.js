import React, { Component } from 'react';

export class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  incrementNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  incrementBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  positivePercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    ).toFixed(2);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.incrementGoodFeedback}>
          Good
        </button>
        <button type="button" onClick={this.incrementNeutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.incrementBadFeedback}>
          Bad
        </button>
        <ul>
          <li>
            Good: <span>{this.state.good}</span>
          </li>
          <li>
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span>{this.state.bad}</span>
          </li>
        </ul>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>Positive Feedback: {this.positivePercentage()}%</p>
      </>
    );
  }
}
