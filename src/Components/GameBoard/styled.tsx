import styled from 'styled-components'

const CardDeckContainer = styled.div`
  position: relative;
  height: 35rem;
`

const CtaContainer = styled.div`
  font-family: "Nunito", sans-serif;

  & > p {
    margin-right: 2rem;
    display: inline;
    color: rgba(0, 0, 0, 0.3);
  }
`

const ChewbaccaContainer = styled.div`
  position: relative;
  text-align: right;

  & > svg {
    width: 150px;
  }
`

const SpeechBubble = styled.div`
  font-size: 3rem;
  position: relative;
  display: inline-block;
  padding: 1.5rem;
  background: #00cc99;
  color: #f6f6f6;
  animation: bounce-in 1s 1;
  transform-origin: left bottom;
  position: absolute;
  top: -4rem;
  right: 8rem;
  z-index: 30;
  font-weight: bold;

  > span {
    font-size: 1.5rem;
    font-family: "Nunito", sans-serif;
  }

  &:after {
    content: '';
    top: 88%;
    right: 0;
    position: absolute;
    border: 1.5rem solid;
    border-color: #00cc99 #00cc99 transparent transparent;
  }
`

export {
  SpeechBubble,
  ChewbaccaContainer,
  CtaContainer,
  CardDeckContainer
}