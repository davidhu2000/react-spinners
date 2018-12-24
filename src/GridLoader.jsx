import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const grid = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`;

const random = top => Math.random() * top;

class Loader extends React.Component {
    style = rand => {
      const {
        color, size, sizeUnit, margin
      } = this.props;

      return css`{
            display: inline-block;
            background-color: ${color};
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            margin: ${margin};
            border-radius: 100%;
            animation-fill-mode: 'both';
            animation: ${grid} ${(rand / 100) + 0.6}s ${(rand / 100) - 0.2}s infinite ease;
        }`;
    };

    wrapper = () => {
      const {
        size, sizeUnit, margin, className
      } = this.props;

      const wrapper = css`{        
            width: ${`${(parseFloat(size) * 3) + (parseFloat(margin) * 6)}${sizeUnit}`};
            font-size: 0;
        }`;

      return className ? css`${wrapper};${className}` : wrapper;
    };


    render() {
      const { loading } = this.props;

      return loading ?
        <div className={this.wrapper()}>
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
          <div className={this.style(random(100))} />
        </div> : null;
    }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.string,
  sizeUnit: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: '2px',
  sizeUnit: 'px',
  className: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin', 'sizeUnit', 'className'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;

