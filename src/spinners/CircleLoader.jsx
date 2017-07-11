import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  "0%": { transform: "rotate(0deg)" },
  "50%": { transform: "rotate(180deg)" },
  "100%": { transform: "rotate(360deg)" }
};

/**
 * @type {string}
 */
const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  /**
   * @return {object} object with circle properties
   */
  getCircleStyle() {
    return {
      borderRadius: "100%",
      position: "absolute",
      border: `1px solid ${this.props.color}`,
      transition: "2s",
      borderBottom: "none",
      borderRight: "none"
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [animationName, '1s', `${i * 0.2}s`, 'infinite', 'linear'].join(' ');
    let animationFillMode = '';

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
    let width = this.props.size * (1 - (i / 10));
    let height = width;
    let left = `${(i * 0.35 * 2.5)}%`;
    let top = `${(i * 0.7 * 2.5)}%`;


    return assign(
      this.getCircleStyle(),
      this.getAnimationStyle(i),
      {
        width,
        height,
        left,
        top
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
        height: this.props.size,
        width: this.props.size,
        position: 'relative'
      };

      return (
        <div className="react-spinners--circle">
          <div style={style}>
            <div style={this.getStyle(0)} />
            <div style={this.getStyle(1)} />
            <div style={this.getStyle(2)} />
            <div style={this.getStyle(3)} />
            <div style={this.getStyle(4)} />
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
