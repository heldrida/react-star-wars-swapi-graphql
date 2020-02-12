import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BoxWrapper from '../BoxWrapper'
import { boxShadowStyle, lightTextShadow } from '../../sharedStyles'

const Logo = styled.div`
  position: relative;
  top: -0.15rem;
  width: 1.8rem;
  height: 1.8rem;
  background-size: 1.8rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxwYXRoIGQ9Ik00MDUuOTA2LDQ4LjI0MWMtMS43MTksLTEuMjgyIC0zLjQ5LC0yLjUzMiAtNS4zMjMsLTMuNzUyYy00Ljg2NSwtMy4yNjIgLTExLjQ2OSwtMS45NTkgLTE0Ljc0LDIuOTA4Yy0zLjI4MSw0Ljg1NiAtMi4wMjEsMTEuNDc0IDIuODEzLDE0Ljc4OGMxLjQ1OCwxIDIuODk2LDIuMDExIDQuMzEzLDMuMDMzYzU4LjYyNSw0My41NTIgNDEuMDIxLDEyOS45NTcgMzQuMDYzLDE1NS44ODVjLTIwLjk0OCw3OC4wNjggLTcyLjcxOSw3Ny40MjIgLTc0LjU2Myw3Ny40NzRjLTAuNzI5LC0wLjA2MyAtMS40NjksMC4wMzEgLTIuMTM1LDAuMTI1Yy0wLjcxOSwwLjA3MyAtMTYuOTksMi4zNjYgLTMwLjgxMywtOS41MzZjLTEzLjY0NiwtMTEuNzQ1IC0yMC44NTQsLTM0LjMyOSAtMjAuODU0LC02NS4zMDFjMCwtNzcuMzQ5IDU1Ljc2LC0xMDYuNjU0IDU4LjEzNSwtMTA3Ljg2M2MyLjcxOSwtMS4zNzYgNC43MjksLTMuODY2IDUuNSwtNi44MTZjMC43NzEsLTIuOTQ5IDAuMjYsLTYuMDk3IC0xLjQyNywtOC42MjlsLTIxLjMzMywtMzIuMDE1Yy0yLjk3OSwtNC40NzEgLTguODU0LC02LjAxMyAtMTMuNjQ2LC0zLjYyN2MtMTEuMTk4LDUuNjA3IC0yNC43MTksMTYuMjY4IC0zNS42ODgsMjUuNzgzYzIuOTU4LC0xOS4xMDMgNy44NDQsLTMzLjk5NSA3LjkxNywtMzQuMjE0YzEuMDk0LC0zLjMxNCAwLjUxLC02Ljk3MiAtMS41OTQsLTkuNzY1bC0zMiwtNDIuNjg3Yy00LjAyMSwtNS4zNzggLTEzLjA0MiwtNS4zNzggLTE3LjA2MywwbC0zMiw0Mi42ODdjLTIuMTA0LDIuNzkzIC0yLjY4OCw2LjQ1MSAtMS41OTQsOS43NjVjMC4wNzMsMC4yMTkgNC45NTgsMTUuMTExIDcuOTE3LDM0LjIxNGMtMTAuOTY5LC05LjUxNSAtMjQuNDksLTIwLjE3NiAtMzUuNjg4LC0yNS43ODNjLTQuODAyLC0yLjM4NyAtMTAuNjU2LC0wLjg0NCAtMTMuNjQ2LDMuNjI3bC0yMS4zMzMsMzIuMDE1Yy0xLjY5OCwyLjU0MyAtMi4yMTksNS43MDEgLTEuNDM4LDguNjZjMC43OTIsMi45NiAyLjgwMiw1LjQ0IDUuNTQyLDYuODA1YzAuNTgzLDAuMjkyIDU4LjEwNCwyOS45NjIgNTguMTA0LDEwNy44NDJjMCwzMC45NzMgLTcuMjA4LDUzLjU1NiAtMjAuODU0LDY1LjMwMWMtMTMuODMzLDExLjkxMiAtMzAuMTI1LDkuNTk4IC0zMC43MjksOS41NDZjLTAuNjY3LC0wLjEwNCAtMS40MzgsLTAuMTk4IC0yLjEzNSwtMC4xMzVjLTEuODY1LDAuMjYxIC01My42OTgsMC42MjUgLTc0LjY0NiwtNzcuNDc0Yy02Ljk1OCwtMjUuOTI3IC0yNC41NjIsLTExMi4zMDEgMzQuMDQyLC0xNTUuODYzYzEuNDM4LC0xLjA0MiAyLjg5NiwtMi4wNjMgNC4zNjUsLTMuMDc0YzQuODMzLC0zLjMxNCA2LjA4MywtOS45MjEgMi43OTIsLTE0Ljc3OGMtMy4yNzEsLTQuODI1IC05LjgzMywtNi4xMjggLTE0Ljc1LC0yLjg5N2MtMS44MTMsMS4yMDkgLTMuNTczLDIuNDQ5IC01LjI3MSwzLjcxYy02Ni41ODMsNDguMTY4IC0xMDYuMTQ2LDEyNS4zMjkgLTEwNi4xNDYsMjA3LjY4YzAsMTQxLjIyMyAxMTQuODQ0LDI1Ni4xMiAyNTYsMjU2LjEyYzE0MS4xNTYsMCAyNTYsLTExNC44OTcgMjU2LC0yNTYuMTJjMCwtODIuMzIgLTM5LjU0MiwtMTU5LjQ2IC0xMDYuMDk0LC0yMDcuNjM5Wm0tMTQ5LjkwNiw0NDIuNDI2Yy0xMjkuMzk2LDAgLTIzNC42NjcsLTEwNS4yNzEgLTIzNC42NjcsLTIzNC42NjdjMCwtNDUuNTMxIDEzLjIwOCwtODkuMzMzIDM3LjA5NCwtMTI2LjYxNWMtNy4xMDQsNDAuNTYzIDEuMzg1LDgwLjQyNyA1LjkzOCw5Ny4zNzVjMjQuMDgzLDg5Ljc4MSA4NS42NjcsOTMuMjUgOTUsOTMuMjVsMC4wMjEsMGM1LjI3MSwwLjY0NiAyNy40MTcsMi4wMzEgNDYuNjM1LC0xNC4yNWMxOS4wMSwtMTYuMTA0IDI4LjY0NiwtNDMuNjA0IDI4LjY0NiwtODEuNzZjMCwtNzAuMzg1IC00MC4yMTksLTEwNi45OSAtNTkuNjc3LC0xMjAuNTgzbDkuNjQ2LC0xNC40NjljMTguOTA2LDEyLjQ0OCA0Mi4yMTksMzUuNjU2IDQyLjQ5LDM1LjkyN2MzLjA2MywzLjA1MiA3LjY2NywzLjk0OCAxMS42MjUsMi4zMTNjMy45OSwtMS42NTYgNi41ODMsLTUuNTQyIDYuNTgzLC05Ljg1NGMwLC0yNS43NiAtNi40MTcsLTUxLjEwNCAtOS41NTIsLTYxLjkzOGwyMC4yMTgsLTI2Ljk0OGwyMC4yMTksMjYuOTQ4Yy0zLjEzNSwxMC44MzMgLTkuNTUyLDM2LjE3NyAtOS41NTIsNjEuOTM4YzAsNC4zMTMgMi41OTQsOC4xOTggNi41ODMsOS44NTRjMy45OSwxLjYxNSA4LjU3MywwLjc0IDExLjYyNSwtMi4zMTNjMC4yNzEsLTAuMjcxIDIzLjU4MywtMjMuNDc5IDQyLjQ5LC0zNS45MjdsOS42NDYsMTQuNDY5Yy0xOS40NTksMTMuNTkzIC01OS42NzgsNTAuMTk4IC01OS42NzgsMTIwLjU4M2MwLDM4LjE1NiA5LjYzNSw2NS42NTYgMjguNjQ2LDgxLjc2YzE5LjIxOSwxNi4yODEgNDEuMzg1LDE0Ljg5NiA0Ni42MzUsMTQuMjVsMC4wMjEsMGM5LjM0NCwwIDcwLjkxNywtMy40NzkgOTUsLTkzLjI1YzQuNTUyLC0xNi45NDggMTMuMDQyLC01Ni44MTMgNS45MzgsLTk3LjM3NWMyMy44ODUsMzcuMjgxIDM3LjA5NCw4MS4wODMgMzcuMDk0LDEyNi42MTVjMCwxMjkuMzk2IC0xMDUuMjcxLDIzNC42NjcgLTIzNC42NjcsMjM0LjY2N1oiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9zdmc+);
`;

const Navigation = styled.nav`
  background-image: linear-gradient(to right, ${(props) => props.theme.skyColor}, ${(props) => props.theme.skyColor}, ${(props) => props.theme.color6}, ${(props) => props.theme.color3});
  height: auto;

  ${boxShadowStyle}
`

const NavigationList = styled.ul`
  line-height: 4rem;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-content: center;
  align-items: center;
`

const NavigationItem = styled.li`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  margin-right: 3rem;
  letter-spacing: 0.05rem;
  color: white;

  ${lightTextShadow}

  & > a {
    color: ${(props) => props.theme.textLight};
    text-decoration: none;
    font-family: "Fredoka One", sans-serif;
    transition: opacity .2s;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }
`

const NavigationBar = () => (
  <nav>
    <Navigation>
      <BoxWrapper>
        <NavigationList>
          <NavigationItem>
            <Logo />
          </NavigationItem>
          <NavigationItem>
            <Link to="/">Home</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/results">Results</Link>
          </NavigationItem>
        </NavigationList>
      </BoxWrapper>
    </Navigation>
  </nav>
)

export default NavigationBar