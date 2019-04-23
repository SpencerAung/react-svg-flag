import React from 'react';
import PropTypes from 'prop-types';

export function Flag ({ code, squared, height, width, radius }) {
  const dim = squared ? '1x1' : '4x3';
  const image = require(`./flags/${dim}/${code.toLowerCase()}.svg`);
  const widthBase = squared ? '1em' : '1.33333333em';
  
  const theme = {
    backgroundSize: 'contain',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'inline-block',
    lineHeight: '1em',
    width: width ? width : widthBase,
    height: height ? height : 'initial',
    borderRadius: radius ? radius : 'initial',
    backgroundImage: `url(${image})`
  };

  return (
    <span style={theme} />
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
