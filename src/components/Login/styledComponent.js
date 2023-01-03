import styled from 'styled-components'

export const DivForm = styled.form`
  background-color: ${props => (props.islight ? 'white' : 'black')};
  font-family: 'Roboto';
`

export const Label = styled.label`
  color: ${props => (props.islight ? '#00306e' : '#94a3b8')};
  font-weight: 600;
`
export const LabelShow = styled.label`
  color: ${props => (props.islight ? '#00306e' : '#94a3b8')};
  font-weight: 400;
  font-size: 14px;
`
