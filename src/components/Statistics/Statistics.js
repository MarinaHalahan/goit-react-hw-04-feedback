import { StatWrap, StatList, StatItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatWrap>
      <StatList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad:{bad}</StatItem>
        <StatItem>Total:{total}</StatItem>
        <StatItem>Positive Feedback: {positivePercentage}%</StatItem>
      </StatList>
    </StatWrap>
  );
};
