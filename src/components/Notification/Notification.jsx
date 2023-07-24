import React from 'react';
import PropTypes from 'prop-types';
export default function Notification(props) {
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
