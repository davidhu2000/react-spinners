import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '0%': {
    transform: 'translate(0, -1em) rotate(-45deg)'
  },
  '5%': {
    transform: 'translate(0, -1em) rotate(-50deg)'
  },
  '20%': {
    transform: 'translate(1em, -2em) rotate(47deg)'
  },
  '25%': {
    transform: 'translate(1em, -2em) rotate(45deg)'
  },
  '30%': {
    transform: 'translate(1em, -2em) rotate(40deg)'
  },
  '45%': {
    transform: 'translate(2em, -3em) rotate(137deg)'
  },
  '50%': {
    transform: 'translate(2em, -3em) rotate(135deg)'
  },
  '55%': {
    transform: 'translate(2em, -3em) rotate(130deg)'
  },
  '70%': {
    transform: 'translate(3em, -4em) rotate(217deg)'
  },
  '75%': {
    transform: 'translate(3em, -4em) rotate(220deg)'
  },
  '100%': {
    transform: 'translate(0, -1em) rotate(-225deg)'
  }
};

/**
 * @type {string}
 */
const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  /**
   * @return {object} object with box properties
   */
  getBoxStyle() {
    return {
      position: 'absolute',
      left: '0px',
      bottom: '-0.1em',
      width: '1em',
      height: '1em',
      backgroundColor: 'transparent',
      border: `0.25em solid ${this.props.color}`,
      borderRadius: '15%',
      transform: 'translate(0, -1em) rotate(-45deg)'
    };
  }

  /**
   * @return {object} object with hill properties
   */
  getHillStyle() {
    return {
      position: 'absolute',
      width: '7.1em',
      height: '7.1em',
      top: '1.7em',
      left: '1.7em',
      borderLeft: `0.25em solid ${this.props.color}`,
      transform: 'rotate(45deg)'
    };
  }

  /**
   * @return {object} object with animation properties
   */
  getAnimationStyle() {
    let animation = [animationName, '2.5s', 'infinite', 'cubic-bezier(.79, 0, .47, .97)'].join(' ');
    let animationFillMode = 'both';

    return {
      animation,
      animationFillMode
    };
  }

  /**
   * @return {object} object with style properties
   */
  getStyle() {
    return assign(
      this.getBoxStyle(),
      this.getAnimationStyle()
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    if (loading) {
      let style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-2.7em',
        marginLeft: '-2.7em',
        width: '5.4em',
        height: '5.4em',
        fontSize: this.props.size
      };

      return (
        <div className="react-spinners--climbing-box">
          <div style={style}>
            <div style={this.getStyle()} />
            <div style={this.getHillStyle()} />
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
  size: 15
};

export default Loader;
