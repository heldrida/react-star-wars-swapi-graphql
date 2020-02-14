import styled, { css, keyframes } from "styled-components"
import { boxShadowStyle, fontLabelStyle } from '../../sharedStyles'
import { IPropsTheme } from '../../Types'

const elementSpacing = css`
padding-bottom: 1rem;
`

const ItemBlock = styled.div`
${elementSpacing};
`

const moveX = keyframes`
from {
  transform: translateX(1rem);
}
to {
  transform: translateX(0rem);
}
`;

const scale = keyframes`
from {
  transform: scale(1) translateX(0);
}
to {
  transform: scale(0.8);
}
`;

const Slide = keyframes`
0% {
  transform: translateX(0);
  opacity: 0;
}
20% {
  opacity: 1;
}
100% {
  transform: translateX(-3rem);
  opacity: 0;
}
`;

const SlideLong = keyframes`
0% {
  transform: translateX(0);
  opacity: 0;
}
20% {
  opacity: 1;
}
100% {
  transform: translateX(-12rem);
  opacity: 0;
}
`;

const moveForward = keyframes`
0% {
  transform: translateX(0);
}

100% {
  transform: translateX(0.44rem);
}
`;

const backForth = keyframes`
0% {
  transform: translateX(0) rotate(90deg);
}
100% {
  transform: translateX(0.68rem) rotate(90deg);
}
`

const LightSaberContainer = styled.div`
position: absolute;
top: 50%;
right: 5rem;
width: 18rem;
transform: translateY(-50%) translateX(-50%);

& > svg:last-child {
  position: relative;
  z-index: 0;
  animation: ${moveForward} 1.2s ease-in-out alternate-reverse infinite;
}

& > svg:nth-child(1) {
  height: 1.42rem;
  position: absolute;
  z-index: 5;
  top: 0.83rem;
  left: 4rem;
  animation: ${moveX} 0.6s ease-in-out alternate infinite;
}

& > svg:nth-child(2) {
  height: 1.42rem;
  position: absolute;
  z-index: 5;
  top: 3.65rem;
  left: -1rem;
  animation: ${moveX} 0.6s ease-in-out alternate-reverse infinite;
}

& > svg:nth-child(3) {
  height: 1.42rem;
  position: absolute;
  z-index: 5;
  top: 6.48rem;
  left: 2rem;
  animation: ${moveX} 0.6s ease-in-out alternate infinite;
}

& > svg:nth-child(4) {
  position: absolute;
  height: 2.2rem;
  top: 8.48rem;
  left: 22rem;
  animation: ${scale} 0.4s ease-in-out alternate-reverse infinite, ${Slide} 2s infinite;
}

& > svg:nth-child(5) {
  height: 1.65rem;
  position: absolute;
  top: -4.52rem;
  left: -1rem;
  animation: ${scale} 0.4s ease-in-out alternate-reverse infinite, ${Slide} 4s infinite;
}

& > svg:nth-child(6) {
  height: 1.2rem;
  top: 12.48rem;
  left: 10rem;
  position: absolute;
  animation: ${scale} 1.2s ease-in-out alternate infinite, ${SlideLong} 8s infinite;
}

& > svg:nth-child(7) {
  height: 3rem;
  top: 19.48rem;
  left: 16rem;
  position: absolute;
  z-index: -1;
  animation: ${scale} 0.8s ease-in-out alternate-reverse infinite, ${SlideLong} 2s infinite;
}
`

const AngelFireContainer = styled.div`
position: absolute;
top: 50%;
right: 5rem;
width: 18rem;
transform: translateY(-50%) translateX(-50%);

& > svg:last-child {
  position: relative;
  z-index: 0;
  animation: ${backForth} 0.9s ease-in-out alternate-reverse infinite;
}

& > svg:nth-child(1) {
  position: absolute;
  height: 2.2rem;
  top: 8.48rem;
  left: 22rem;
  animation: ${scale} 0.4s ease-in-out alternate-reverse infinite, ${Slide} 2s infinite;
}

& > svg:nth-child(2) {
  height: 1.65rem;
  position: absolute;
  top: -4.52rem;
  left: -1rem;
  animation: ${scale} 0.4s ease-in-out alternate-reverse infinite, ${Slide} 4s infinite;
}

& > svg:nth-child(3) {
  height: 1.2rem;
  top: 12.48rem;
  left: 10rem;
  position: absolute;
  animation: ${scale} 1.2s ease-in-out alternate infinite, ${SlideLong} 8s infinite;
}

& > svg:nth-child(4) {
  height: 3rem;
  top: 19.48rem;
  left: 16rem;
  position: absolute;
  z-index: -1;
  animation: ${scale} 0.8s ease-in-out alternate-reverse infinite, ${SlideLong} 2s infinite;
}
`

const CtaButtonContainer = styled.div`
padding: 0;
margin: 2rem 0;
`

const Box = styled.div`
width: auto;
height: auto;
margin-top: 4rem;
padding: 1rem 2rem 2rem;
position: relative;
background-image: linear-gradient(to left, ${(props: IPropsTheme) => props.theme.color1}, ${(props: IPropsTheme) => props.theme.color1}, ${(props: IPropsTheme) => props.theme.color1}, ${(props: IPropsTheme) => props.theme.color0});

${boxShadowStyle}
`

const TitleBox = styled.p`
line-height: 2rem;
font-size: 1.3rem;
font-weight: 400;
color: ${(props: IPropsTheme) => props.theme.textDark};

${fontLabelStyle}
`

export {
  elementSpacing,
  ItemBlock,
  moveX,
  scale,
  Slide,
  SlideLong,
  moveForward,
  backForth,
  LightSaberContainer,
  AngelFireContainer, 
  CtaButtonContainer,
  Box,
  TitleBox
}