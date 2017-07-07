import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

const keyframes = {
  0: {
    "0%": { transform: 'rotate(0deg) ' },
    "50%": { transform: 'rotate(-45deg) ' }
  },
  1: {
    "0%": { transform: 'rotate(0deg) ' },
    "50%": { transform: 'rotate(45deg) ' }
  }
};

/**
 * @type {object}
 */
let animations = {};

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
    let size = this.props.size;
    let animationName = animations[size];

    if (!animationName) {
      let keyframesBall = {
        '75%': {
          opacity: 0.7
        },
        '100%': {
          transform: `translate(${-4 * size}px, ${-size / 4}px)`
        }
      };
      animationName = insertKeyframesRule(keyframesBall);
      animations[size] = animationName;
    }

    let animation = [animationName, '1s', `${i * 0.25}s`, 'infinite', 'linear'].join(' ');
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
    if (i <= 1) {
      let s1 = `${this.props.size}px solid transparent`;
      let s2 = `${this.props.size}px solid ${this.props.color}`;

      let animationName = insertKeyframesRule(keyframes[i]);
      let animation = [animationName, '0.8s', 'infinite', 'ease-in-out'].join(' ');

      return {
        width: 0,
        height: 0,
        borderRight: s1,
        borderTop: i === 0 ? s1 : s2,
        borderLeft: s2,
        borderBottom: i === 0 ? s2 : s1,
        borderRadius: this.props.size,
        position: 'absolute',
        animation
      };
    }

    return assign(
      this.getBallStyle(i),
      this.getAnimationStyle(i),
      {
        width: 10,
        height: 10,
        transform: `translate(0, ${-this.props.size / 4}px)`,
        position: 'absolute',
        top: 25,
        left: 100
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
        position: 'relative',
        fontSize: 0,
        height: this.props.size,
        width: this.props.size
      };

      return (
        <div className="react-spinners--pacman">
          <div style={style}>
            <div style={this.getStyle(0)} />
            <div style={{ ...this.getStyle(1), position: 'absolute' }} />
            <div style={this.getStyle(2)} />
            <div style={this.getStyle(3)} />
            <div style={this.getStyle(4)} />
            <div style={this.getStyle(5)} />
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
  size: 25,
  margin: 2
};

export default Loader;
