import styles from '~/styles/TheHeader.module.scss'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
`
const Title = styled.h1`
  position: absolute;
  margin: 0 auto;
  font-size: 200px;
`
export default function TheTitle() {
  return (
    <Container>
      <Title>Movie</Title>
    </Container>
  )
}
