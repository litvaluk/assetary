import './Login.css'
import { Form, Button, Card, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    <>
      <div className="logo">assetary</div>
      <Container className="d-flex justify-content-center mt-5">
        <Card className="text-center" style={{ width: '20rem', borderRadius: 25, backgroundColor: "#e4e4e4" }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control className="rounded-pill" type="username" placeholder="Enter username" autofocus="true"/>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="rounded-pill" type="password" placeholder="Enter password"/>
              </Form.Group>
              <Button className="rounded-pill" variant="warning" type="submit">Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Login;