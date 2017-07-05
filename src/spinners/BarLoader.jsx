import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframesLong = {
  '0%': {
    left: '-35%',
    right: '100%'
  },
  '60%': {
    left: '100%',
    right: '-90%'
  },
  '100%': {
    left: '100%',
    right: '-90%'
  }
}

/**
 * @type {object}
 */
const keyframesShort = {
  '0%': {
    left: '-200%',
    right: '100%'
  },
  '60%': {
    left: '107%',
    right: '-8%'
  },
  '100%': {
    left: '107%',
    right: '-8%'
  }
}

/**
 * @type {string}
 */
const animationNameLong = insertKeyframesRule(keyframesLong);

/**
 * @type {string}
 */
const animationNameShort = insertKeyframesRule(keyframesShort);

class Loader extends React.Component {

  /**
   * @return {object} object with ball properties
   */
  getLineStyle() {
    return {
      position: 'absolute',
      height: this.props.height,
      display: 'block',
      backgroundColor: this.props.color,
      borderRadius: 2,
      backgroundClip: 'padding-box',
      overflow: 'hidden',
      willChange: 'left right'
    }
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation;
    let animationFillMode = 'forwards';

    if (i === 1) {
      animation = [animationNameLong, '2.1s', 'cubic-bezier(0.65, 0.815, 0.735, 0.395)', 'infinite'].join(' ')   
    } else if (i === 2) {
      animation = [animationNameShort, '2.1s', '1.15s', 'cubic-bezier(0.165, 0.84, 0.44, 1)', 'infinite'].join(' ')
    }

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
    if (i === 0) {
      let { color } = this.props;

      if (color[0] === '#') {
        color = color.slice(1);
      }

      if (color.length === 3) {
        let res = '';
        color.split('').forEach(c => {
          res += c;
          res += c;
        });
        color = res;
      }

      let rgbValues = color.match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')
      let rgba = `rgba(${rgbValues}, 0.2)`;

      return {
        position: 'relative',
        height: this.props.height,
        width: this.props.width,
        overflow: 'hidden',
        backgroundColor: rgba,
        backgroundClip: 'padding-box'
      }
    }

    return assign(
      this.getLineStyle(i),
      this.getAnimationStyle(i)
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    if (loading) {
      return (
        <div id={this.props.id} className={this.props.className}>
          <div style={this.getStyle(0)} >
            <div style={this.getStyle(1)} />
            <div style={this.getStyle(2)} />
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
  width: PropTypes.number,
  height: PropTypes.number
}

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  width: 100,
  height: 4
}

export default Loader;