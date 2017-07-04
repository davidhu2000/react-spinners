import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const animationName = {};

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
    }
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let size = this.props.size;
    let animationName = animations[size];

    if (! animationName) {
      let keyframes = {
        '75%': {
          opacity: 0.7
        },
        '100%': {
          transform: 'translate(' + (-4 * size) + 'px,' + (-size / 4) + 'px)'
        }
      };
      animationName = animations[size] = insertKeyframesRule(keyframes);
    }

    let animation = [animationName, '1s', i*0.25 + 's', 'infinite', 'linear'].join(' ');
    let animationFillMode = 'both';

    return {
      animation: animation,
      animationFillMode: animationFillMode
    }
  }

  /**
   * @param  {number} i element index
   * @return {object} object with style properties
   */
  getStyle(i) {
    if (i == 1) {
      let s1 =  this.props.size + 'px solid transparent';
      let s2 =  this.props.size + 'px solid ' + this.props.color;

      return {
        width: 0,
        height: 0,
        borderRight: s1,
        borderTop: s2,
        borderLeft: s2,
        borderBottom: s2,
        borderRadius: this.props.size
      };
    }

    return assign(
      this.getBallStyle(i),
        this.getAnimationStyle(i),
      {
        width: 10,
        height: 10,
        transform: 'translate(0, '+ -this.props.size / 4 + 'px)',
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
        fontSize: 0
      };

      return (
        <div id={this.props.id} className={this.props.className}>
          <div style={style}>
            <div style={this.getStyle(1)} />
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
}

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#ffffff',
  size: 25,
  margin: 2
}

export default Loader;