import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '0%': {
    transform: 'scale(1)',
    opacity: 1
  },
  '45%': {
    transform: 'scale(0.1)',
    opacity: 0.7
  },
  '80%': {
    transform: 'scale(1)',
    opacity: 1
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
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
      margin: this.props.margin,
      borderRadius: '100%'
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [animationName, '0.75s', `${i * 0.12}s`, 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' ');
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
        <div className="react-spinners--pulse">
          <div style={this.getStyle(1)} />
          <div style={this.getStyle(2)} />
          <div style={this.getStyle(3)} />
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
  size: PropTypes.number,
  margin: PropTypes.number
};

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: 2
};

export default Loader;
