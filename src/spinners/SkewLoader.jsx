import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '25%': {
    transform: 'perspective(100px) rotateX(180deg) rotateY(0)'
  },
  '50%': {
    transform: 'perspective(100px) rotateX(180deg) rotateY(180deg)'
  },
  '75%': {
    transform: 'perspective(100px) rotateX(0) rotateY(180deg)'
  },
  '100%': {
    transform: 'perspective(100px) rotateX(0) rotateY(0)'
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
  getSharpStyle() {
    return {
      width: 0,
      height: 0,
      borderLeft: `${this.props.size}px solid transparent`,
      borderRight: `${this.props.size}px solid transparent`,
      borderBottom: `${this.props.size}px solid ${this.props.color}`
    };
  }

  /**
   * @return {object} object with animation properties
   */
  getAnimationStyle() {
    let animation = [animationName, '3s', '0s', 'infinite', 'cubic-bezier(.09,.57,.49,.9)'].join(' ');
    let animationFillMode = 'both';

    return {
      animation,
      animationFillMode
    };
  }

  /**
   * @return {object} object with style properties
   */
  getStyle() {
    return assign(
      this.getSharpStyle(),
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
        <div className="react-spinners--skew">
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
  size: 20
};

export default Loader;
