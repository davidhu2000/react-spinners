import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '50%': {
    opacity: 0.3
  },
  '100%': {
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
  getLineStyle() {
    return {
      backgroundColor: this.props.color,
      height: this.props.height,
      width: this.props.width,
      margin: this.props.margin,
      borderRadius: this.props.radius
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [animationName, '1.2s', `${i * 0.12}s`, 'infinite', 'ease-in-out'].join(' ');
    let animationFillMode = 'both';

    return {
      animation,
      animationFillMode
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with position properties
   */
  getPosStyle(i) {
    let radius = 20;
    let quarter = (radius / 2) + (radius / 5.5);

    let lines = {
      l1: {
        top: radius,
        left: 0
      },
      l2: {
        top: quarter,
        left: quarter,
        transform: 'rotate(-45deg)'
      },
      l3: {
        top: 0,
        left: radius,
        transform: 'rotate(90deg)'
      },
      l4: {
        top: -quarter,
        left: quarter,
        transform: 'rotate(45deg)'
      },
      l5: {
        top: -radius,
        left: 0
      },
      l6: {
        top: -quarter,
        left: -quarter,
        transform: 'rotate(-45deg)'
      },
      l7: {
        top: 0,
        left: -radius,
        transform: 'rotate(90deg)'
      },
      l8: {
        top: quarter,
        left: -quarter,
        transform: 'rotate(45deg)'
      }
    };

    return lines[`l${i}`];
  }

  /**
   * @param  {number} i element index
   * @return {object} object with style properties
   */
  getStyle(i) {
    return assign(
      this.getLineStyle(i),
      this.getPosStyle(i),
      this.getAnimationStyle(i),
      {
        position: 'absolute'
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
        fontSize: 0
      };

      return (
        <div className="react-spinners--fade">
          <div style={style}>
            <div style={this.getStyle(1)} />
            <div style={this.getStyle(2)} />
            <div style={this.getStyle(3)} />
            <div style={this.getStyle(4)} />
            <div style={this.getStyle(5)} />
            <div style={this.getStyle(6)} />
            <div style={this.getStyle(7)} />
            <div style={this.getStyle(8)} />
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
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.number,
  radius: PropTypes.number
};

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  height: 15,
  width: 5,
  margin: 2,
  radius: 2
};

export default Loader;
