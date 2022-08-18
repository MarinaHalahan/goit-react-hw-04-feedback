import React, { Component } from 'react';
import { SectionWrap } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';

export class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };
  // incrementGoodFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  // incrementNeutralFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  // incrementBadFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  positivePercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    ).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <SectionWrap title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.incrementFeedback}
          ></FeedbackOptions>
          {/* <button type="button" onClick={this.incrementGoodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.incrementNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.incrementBadFeedback}>
            Bad
          </button> */}
        </SectionWrap>
        <SectionWrap title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </SectionWrap>
      </>
    );
  }
}
