import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  
}

/**
 * @type {string}
 */
const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  /**
   * @return {object} object with line properties
   */
  getLineStyle() {
    return {
      position: 'absolute',
      content: '',
      top: '50%',
      left: '50%',
      display: 'block',
      width: this.props.size / 5,
      height: this.props.size / 5,
      borderRadius: this.props.size / 10,
      transform: 'translate(-50%, -50%)'
    }
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    

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
    return assign(
      
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    let style = {
      position: 'relative',
      width: this.props.size,
      height: this.props.size,
      transform: 'rotate(165deg)',
      background: 'blue'
    };

    if (loading) {
      return (
        <div id={this.props.id} className={this.props.className}>
          <div style={style}>

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
  size: PropTypes.number,
  color: PropTypes.string
}

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  size: 50,
  color: "#000000"
}

export default Loader;