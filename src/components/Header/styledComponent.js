import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-width: 1px;
  border-color: ${props => (props.islight ? 'black' : 'white')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`

export default Nav
