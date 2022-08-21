import PropTypes from 'prop-types';
import { Warning } from '../Notification/Notification.styled';

export const Notification = ({ message }) => <Warning>{message}</Warning>;

Notification.propTypes = {
  message: PropTypes.string,
};
