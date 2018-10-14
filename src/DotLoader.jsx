import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const rotate = keyframes`
  100% {transform: rotate(360deg)}
`;

const bounce = keyframes`
  0%, 100% {transform: scale(0)} 
  50% {transform: scale(1.0)}
`;

class Loader extends React.Component {
    style = i => {
      const { size, sizeUnit, color } = this.props;

      return css`{
            position: absolute;
            top: ${i % 2 ? '0' : 'auto'};
            bottom: ${i % 2 ? 'auto' : '0'};
            height: ${`${size / 2}${sizeUnit}`};
            width: ${`${size / 2}${sizeUnit}`};
            background-color: ${color};
            border-radius: 100%;
            animation-fill-mode: forwards;
            animation: ${bounce} 2s ${i === 2 ? '-1s' : '0s'} infinite linear;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit, className } = this.props;

      const wrapper = css`{        
            position: relative;
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            animation-fill-mode: forwards;
            animation: ${rotate} 2s 0s infinite linear;
        }`;

      return className ? css`${wrapper};${className}` : wrapper;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div className={this.wrapper()}>
          <div className={this.style(1)} />
          <div className={this.style(2)} />
        </div> : null;
    }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 60,
  sizeUnit: 'px',
  className: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit', 'className'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
