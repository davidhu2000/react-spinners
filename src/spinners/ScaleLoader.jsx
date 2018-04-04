import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

class Loader extends React.Component {
  style = i => css`{
        background-color: ${this.props.color};
        width: ${this.props.width + this.props.widthUnit};
        height: ${this.props.height + this.props.heightUnit};
        margin: ${this.props.margin};
        border-radius: ${this.props.radius.toString() + this.props.radiusUnit};
        display: inline-block;
        animation: ${scale} 1s ${i * 0.1}s infinite cubic-bezier(.2,.68,.18,1.08);
        animation-fill-mode: both;
    }`;

  render() {
    return this.props.loading ?
      <div>
        <div className={this.style(1)} />
        <div className={this.style(2)} />
        <div className={this.style(3)} />
        <div className={this.style(4)} />
        <div className={this.style(5)} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.string,
  radius: PropTypes.number,
  heightUnit: PropTypes.string,
  widthUnit: PropTypes.string,
  radiusUnit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  height: 35,
  width: 4,
  margin: '2px',
  radius: 2,
  heightUnit: 'px',
  widthUnit: 'px',
  radiusUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'height', 'width', 'margin', 'radius', 'heightUnit', 'widthUnit', 'radiusUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
