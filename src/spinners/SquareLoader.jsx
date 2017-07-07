import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '25%': {
    transform: 'rotateX(180deg) rotateY(0)'
  },
  '50%': {
    transform: 'rotateX(180deg) rotateY(180deg)'
  },
  '75%': {
    transform: 'rotateX(0) rotateY(180deg)'
  },
  '100%': {
    transform: 'rotateX(0) rotateY(0)'
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
  getSquareStyle() {
    return {
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size
    };
  }

  /**
   * @return {object} object with animation properties
   */
  getAnimationStyle() {
    let animation = [animationName, '3s', '0s', 'infinite', 'cubic-bezier(.09,.57,.49,.9)'].join(' ');
    let animationFillMode = 'both';
    let perspective = '100px';

    return {
      perspective,
      animation,
      animationFillMode
    };
  }

  /**
   * @return {object} object with style properties
   */
  getStyle() {
    return assign(
      this.getSquareStyle(),
      this.getAnimationStyle(),
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
        <div className="react-spinners--square">
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
  size: 50
};

export default Loader;
