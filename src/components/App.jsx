import { SectionWrap } from './Section/Section';
import { FeedbackCounter } from './feedbackCounter/feedbackCounter';

export const App = () => {
  return (
    <SectionWrap title="Please leave feedback">
      <FeedbackCounter></FeedbackCounter>
    </SectionWrap>
  );
};
