import { Section, Title } from './Section.styled';

export const SectionWrap = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};
