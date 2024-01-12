import React from 'react'
import styled from 'styled-components'
import background from '../Assets/login.jpg'

const Container = styled.div`
    img{
        height: 100vh;
        width: 100vw;
    }
`;

const BackgroundImage = () => {
  return (
    <Container>
        <img src={background} alt="background" />
    </Container>

  )
}

export default BackgroundImage