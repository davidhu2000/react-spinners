import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '0%': {
    transform: 'scale(1)'
  },
  '50%': {
    transform: 'scale(0.5)',
    opacity: 0.7
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
};

/**
 * @type {string}
 */
const animationName = insertKeyframesRule(keyframes);

/**
 * @param  {number} top top position
 * @return {number} random value
 */
const random = top => Math.random() * top;

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
   * @return {object} object with animation properties
   */
  getAnimationStyle() {
    let animationDuration = `${(random(100) / 100) + 0.6}s`;
    let animationDelay = `${(random(100) / 100) - 0.2}s`;

    let animation = [animationName, animationDuration, animationDelay, 'infinite', 'ease'].join(' ');
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
      let style = {
        width: (parseFloat(this.props.size) * 3) + (parseFloat(this.props.margin) * 6),
        fontSize: 0
      };

      return (
        <div className="react-spinners--grid">
          <div style={style}>
            <div style={this.getStyle(1)} />
            <div style={this.getStyle(2)} />
            <div style={this.getStyle(3)} />
            <div style={this.getStyle(4)} />
            <div style={this.getStyle(5)} />
            <div style={this.getStyle(6)} />
            <div style={this.getStyle(7)} />
            <div style={this.getStyle(8)} />
            <div style={this.getStyle(9)} />
          </div>
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
