import { useState } from 'react';
import { SectionWrap } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';

export const FeedbackCounter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = key => {
    switch (key) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        throw new Error('Not supported key');
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const positivePercentage = () => {
    const result = ((good * 100) / countTotalFeedback()).toFixed(2);
    return Number(result);
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <>
      <SectionWrap title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={incrementFeedback}
        />
      </SectionWrap>
      <SectionWrap title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionWrap>
    </>
  );
};
