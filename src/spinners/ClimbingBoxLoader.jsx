import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const climbingBox = keyframes`
  0% {transform:translate(0, -1em) rotate(-45deg)} 
  5% {transform:translate(0, -1em) rotate(-50deg)}
  20% {transform:translate(1em, -2em) rotate(47deg)}
  25% {transform:translate(1em, -2em) rotate(45deg)}
  30% {transform:translate(1em, -2em) rotate(40deg)}
  45% {transform:translate(2em, -3em) rotate(137deg)}
  50% {transform:translate(2em, -3em) rotate(135deg)}
  55% {transform:translate(2em, -3em) rotate(130deg)}
  70% {transform:translate(3em, -4em) rotate(217deg)}
  75% {transform:translate(3em, -4em) rotate(220deg)}
  100% {transform:translate(0, -1em) rotate(-225deg)}
`;

class Loader extends React.Component {
  style = () => css`{   
        position: absolute;
        left: 0;
        bottom: -0.1em;
        height: 1em;
        width: 1em;
        background-color: transparent;
        border-radius: 15%;
        border: 0.25em solid ${this.props.color};
        transform: translate(0, -1em) rotate(-45deg);
        animation-fill-mode: both;
        animation: ${climbingBox} 2.5s infinite cubic-bezier(.79, 0, .47, .97);
    }`;

  wrapper = () => css`{        
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -2.7em;
        margin-left: -2.7em;
        width: 5.4em;
        height: 5.4em;
        font-size: ${this.props.size + this.props.sizeUnit};
    }`;


  hill = () => css`{
        position: absolute;
        width: 7.1em;
        height: 7.1em;
        top: 1.7em;
        left: 1.7em;
        border-left: 0.25em solid ${this.props.color};
        transform: rotate(45deg);
    }`;

  container = css`{
        position: relative;
        width: 7.1em;
        height: 7.1em;
    }`;

  render() {
    return this.props.loading ?
      <div className={this.container}>
        <div className={this.wrapper()}>
          <div className={this.style()} />
          <div className={this.hill()} />
        </div>
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  sizeUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
