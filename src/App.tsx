import Container from './components/Container';
import Navbar from './components/Navbar';

export default function App(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <h1 className="font-Oswald">the Quick fox jumps over the lazy dod</h1>
      <h1 className="font-bold">the Quick fox jumps over the lazy dod</h1>
      <h1>the Quick fox jumps over the lazy dod</h1>
    </Container>
  );
}
