import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

const keyframes = {
  
}

const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

   /**
   * @return {bbject} object with ball properties
   */
  getBallStyle() {
    return {
      
    }
  }

  /**
   * @param  {number} i element index
   * @return {bbject} object with animation properties
   */
  getAnimationStyle(i) {
    

    return {
      animation: animation,
      animationFillMode: animationFillMode
    }
  }

  /**
   * @param  {number} i element index
   * @return {bbject} object with style properties
   */
  getStyle(i) {
    return assign(
      
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactElement | null} Returns Spinner or null
   */
  renderLoader(loading) {
    if (loading) {
      return (
        <div id={this.props.id} className={this.props.className}>
          
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
 * @type {Object}
 */
Loader.propTypes = {
  
}

/**
 * @type {Object}
 */
Loader.defaultProps = {
  
}

export default Loader;