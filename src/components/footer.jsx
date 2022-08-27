import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Foot>Copyright &copy; Faris Sabic</Foot>
  )
}

const Foot = styled.footer`
    background: black;
    width : 100%;
    height : 10rem;
    margin-top : 5rem;
    text-align : center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Footer