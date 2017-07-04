import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

const keyframes = {
  
}

const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  getBallStyle() {
    return {
      
    }
  }

  getAnimationStyle(i) {
    

    return {
      animation: animation,
      animationFillMode: animationFillMode
    }
  }

  getStyle(i) {
    return assign(
      
    );
  }

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

Loader.propTypes = {
  
}

Loader.defaultProps = {
  
}

export default Loader;