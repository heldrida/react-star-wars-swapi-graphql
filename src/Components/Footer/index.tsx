import React from 'react'
import styled from 'styled-components'
import { TPropFlag } from '../../Types'

const FooterContainer = styled.div<TPropFlag>`
  padding: 1rem 0;
  color: ${(props: TPropFlag) => props.theme.color7};
  opacity: 0.42;
  text-align: right;
`

const FooterItem = styled.div`
  font-size: 1rem;
  font-family: "Nunito", sans-serif;

  & > a {
    font-weight: bold;
    text-decoration: none;
    color: ${(props: TPropFlag) => props.theme.color7}
  }
`

const Footer = () => (
  <FooterContainer>
    <FooterItem>Created by <a href="http://punkbit.com">Punkbit</a> 2020</FooterItem>
  </FooterContainer>
)

export default Footer