import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

const keyframes = {
  '0%': {
    transform: 'rotate(0deg) scale(1)'
  },
  '50%': {
    transform: 'rotate(180deg) scale(0.8)'
  },
  '100%': {
    transform: 'rotate(360deg) scale(1)'
  }
}

const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  getBallStyle() {
    return {
      width: this.props.size,
      height: this.props.size,
      border: '2px solid',
      borderColor: this.props.color,
      borderBottomColor: 'transparent',
      borderRadius: '100%',
      background: 'transparent !important',
      verticalAlign: this.props.verticalAlign
    }
  }

  getAnimationStyle(i) {
    let animation = [animationName, '0.75s', '0s', 'infinite', 'linear'].join(' ');
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
      {
        display: 'inline-block'
      }
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
          <div id={this.props.id} className={this.props.className}>
              <div style={this.getStyle()}></div>
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
  size: '35px'
}

export default Loader;