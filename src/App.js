import './App.css';
import BarGraph from "./components/BarGraph";
import { Col, Row, Container } from 'react-bootstrap';
import ClockGame from './components/ClockGame';

function App() {
  return (
    <div className="App">


      <div>
        <Container fluid className='mainContent'>
          <Row>

            <Col md={6}>
              <ClockGame />
            </Col>

            <Col md={6}>
              <BarGraph />
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  );
}

export default App;
