/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

class Loader extends React.Component {
    style = i => {
      const {
        color, width, height, margin, radius, widthUnit, heightUnit, radiusUnit
      } = this.props;

      return css`{
            background-color: ${color};
            width: ${`${width}${widthUnit}`};
            height: ${`${height}${heightUnit}`};
            margin: ${margin};
            border-radius: ${`${radius}${radiusUnit}`};
            display: inline-block;
            animation: ${scale} 1s ${i * 0.1}s infinite cubic-bezier(.2,.68,.18,1.08);
            animation-fill-mode: both;
        }`;
    };

    wrapper = () => this.props.css || '';

    render() {
      const { loading } = this.props;

      return loading ?
        <div css={this.wrapper()}>
          <div css={this.style(1)} />
          <div css={this.style(2)} />
          <div css={this.style(3)} />
          <div css={this.style(4)} />
          <div css={this.style(5)} />
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
  radiusUnit: PropTypes.string,
  css: PropTypes.string
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
  radiusUnit: 'px',
  css: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'height', 'width', 'margin', 'radius', 'heightUnit', 'widthUnit', 'radiusUnit', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
