import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

const keyframes = {
  '0%, 100%': {
    transform: 'scale(0)'
  },
  '50%': {
    transform: 'scale(1.0)'
  }
};

const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  getBallStyle() {
    return {
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
      borderRadius: '100%',
      opacity: 0.6,
      position: 'absolute',
      top: 0,
      left: 0,
      verticalAlign: this.props.verticalAlign
    }
  }

  getAnimationStyle(i) {
    let animation = [animationName, '2s', i == 1 ? '1s': '0s', 'infinite', 'ease-in-out'].join(' ');
    let animationFillMode = 'both';

    return {
      animation: animation,
      animationFillMode: animationFillMode
    }
  }

  getStyle(i) {
    if (i) {
      return assign(
        this.getBallStyle(i),
        this.getAnimationStyle(i)
      );
    }

    return assign(
      {
        width: this.props.size,
        height: this.props.size,
        position: 'relative'
      }
    );
  }

  renderLoader(loading) {
    if (loading) {
      return (
        <div id={this.props.id} className={this.props.className}>
          <div style={this.getStyle()}>
            <div style={this.getStyle(1)}></div>
            <div style={this.getStyle(2)}></div>
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

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string
}

Loader.defaultProps = {
  loading: true,
  color: '#ffffff',
  size: '60px',
}

export default Loader;