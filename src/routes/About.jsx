import styled from 'styled-components'
import TheHeader from '~/components/TheHeader'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 100px;
`
export default function About() {
  return (
    <>
      <TheHeader />
      <Container>
        <Title>About Something..</Title>
      </Container>
    </>
  )
}
