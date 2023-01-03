import styled from 'styled-components'

export const DivHome = styled.div`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  height: 100vh;
`

export default DivHome
