import styled, { keyframes } from 'styled-components'
import { IPropsTheme } from '../../Types'

const RollOut = keyframes`
  0% {
    top: -100px;
    transform: rotateX(30deg)  translateZ(0);
  }
  100% { 
    top: -3000px;
    transform: rotateX(30deg) translateZ(-1900px);
  }
`

const TextFadeInfinityContainer = styled.div`
  perspective: 600px;
  font-size: 5rem;
  letter-spacing: 0.04rem;
  display: flex;
  justify-content: center;
  position: relative;
  height: 50rem;
  color: ${(props: IPropsTheme) => props.theme.color6};
  line-height: 8rem;
  font-family: "Nunito", sans-serif;
`

const Stripe = styled.div`
  position: relative;
  top: 100px;
  transform-origin: 20% 100%;
  animation: ${RollOut} 90s infinite;
`

const WinnerContainer = styled.div`
  padding-bottom: 1rem;

  & > p {
    line-height: 6rem;
    padding-bottom: 0;
    margin-bottom: 0;
    text-align: left;
  }
`

const NoResultsYet = styled.div`
  margin: 10rem 0;
  text-align: center;
  & > a {
    font-family: "Nunito", sans-serif;
    text-decoration: none;
    font-size: 2rem;
    line-height: 5rem;
  }
`
export {
  RollOut,
  TextFadeInfinityContainer,
  Stripe,
  WinnerContainer,
  NoResultsYet
}