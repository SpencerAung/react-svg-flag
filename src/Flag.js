import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'flag-icon-css/css/flag-icon.css';

export function Flag ({ code, height, width, radius }) {
  const className = classnames('flag-icon', `flag-icon-${code}`);
  return (
    <span className={ className } style={{ height: height, width: width, borderRadius: radius }} />
  );
}

Flag.propTypes = {
  code: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number
};

Flag.defaultProps = {
  code: 'us',
  height: 20,
  width: 28,
  radius: 3
};
