import React from 'react'
import { styled } from 'styled-components'


function Header() {
  return (
    <Container>
      <h3>Task Management App</h3>
    </Container>
  )
}

export default Header

const Container = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 margin:20px 0px;
`