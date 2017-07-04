import React from 'react';
import PropTypes from 'prop-types';
import assgin from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

const keyframes = {
  '50%': {
    transform: 'scale(0.75)',
    opacity: 0.2
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
}

const anmiationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  getBallStyle() {
    return {
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
      margin: this.props.margin,
      borderRadius: '100%',
      verticalAlign: this.props.verticalAlign
    }
  }

  getAnimationStyle(i) {
    let animation = [animationName, '0.7s', i % 2 ? '0s': '0.35s', 'infinite', 'linear'].join(' ');
    let animationFillMode = 'both';

    return {
      animation: animation,
      animationFillMode: animationFillMode
    }
  }

  getStyle(i) {
    return assign(
      this.getBallStyle(i),
      this.getAnimationStyle(i),
      { display: 'inline-block' }
    );
  }

  renderLoader(loading) {
    if (loading) {
      return (
        <div id={this.props.id} className={this.props.className}>
          <div style={this.getStyle(1)}></div>
          <div style={this.getStyle(2)}></div>
          <div style={this.getStyle(3)}></div>
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
  loading: React.PropTypes.bool,
  color: React.PropTypes.string,
  size: React.PropTypes.string,
  margin: React.PropTypes.string
}

Loader.defaultProps = {
  loading: true,
  color: '#ffffff',
  size: '15px',
  margin: '2px'
}

export default Loader;