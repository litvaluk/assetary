import fire from '../fire'
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = (props) => {

  const { user, setUser } = props;

  const handleLogout = () => {
    fire.auth().signOut();
    setUser("");
  }

  return (
    <>
      <Container className="d-flex justify-content-center mt-5">
        <Button className="rounded-pill" variant="warning" type="submit" onClick={handleLogout}>Logout</Button>
      </Container>
    </>
  )
}

export default Dashboard;