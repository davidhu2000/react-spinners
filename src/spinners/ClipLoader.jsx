import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '0%': {
    transform: 'rotate(0deg) scale(1)'
  },
  '50%': {
    transform: 'rotate(180deg) scale(0.8)'
  },
  '100%': {
    transform: 'rotate(360deg) scale(1)'
  }
};

/**
 * @type {string}
 */
const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  /**
   * @return {object} object with ball properties
   */
  getBallStyle() {
    return {
      width: this.props.size,
      height: this.props.size,
      border: '2px solid',
      borderColor: this.props.color,
      borderBottomColor: 'transparent',
      borderRadius: '100%',
      background: 'transparent !important'
    };
  }

  /**
   * @return {object} object with animation properties
   */
  getAnimationStyle() {
    let animation = [animationName, '0.75s', '0s', 'infinite', 'linear'].join(' ');
    let animationFillMode = 'both';

    return {
      animation,
      animationFillMode
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with style properties
   */
  getStyle(i) {
    return assign(
      this.getBallStyle(i),
      this.getAnimationStyle(i),
      {
        display: 'inline-block'
      }
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    if (loading) {
      return (
        <div className="react-spinners--clip">
          <div style={this.getStyle()} />
        </div>
      );
    }

    return null;
  }

  render() {
    return this.renderLoader(this.props.loading);
  }
}

/**
 * @type {object}
 */
Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number
};

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 35
};

export default Loader;
