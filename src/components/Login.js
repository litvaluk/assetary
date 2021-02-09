import { useEffect, useState } from 'react';
import fire from '../fire';
import { Form, Button, Card, Container, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = (props) => {

  const { user, setUser} = props;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [loading, setLoading] = useState(false);
  const [authTested, setAuthTested] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    setLoading(true);
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
      setLoading(false);
    });
  }

  const handleSignup = () => {
    setLoading(true);
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
      setLoading(false);
    });
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      setLoading(false);
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setAuthTested(true);
    })
  }

  useEffect(() => {
    authListener();
  }, [])

  const onClickLoginButton = (event) => {
    event.preventDefault();
    handleLogin();
  }

  const onClickSignupButton = (event) => {
    event.preventDefault();
    handleSignup();
  }

  const renderControls = () => {
    if (loading) {
      return (
        <Spinner animation="border" variant="warning"/>
      )
    } else {
      if (hasAccount) {
        return (
          <>
            <Button className="rounded-pill mt-3 mb-3" variant="warning" type="submit" onClick={onClickLoginButton}>Sign in</Button>
            <Form.Text>Don't have an account? <span onClick={() => setHasAccount(false)} style={{fontWeight: "bold"}}>Sign up</span></Form.Text>
          </>
        )
      } else {
        return (
          <>
            <Button className="rounded-pill mt-3 mb-3" variant="warning" type="submit" onClick={onClickSignupButton}>Sign up</Button>
            <Form.Text>Have an account? <span onClick={() => setHasAccount(true)} style={{fontWeight: "bold"}}>Sign in</span></Form.Text>
          </>
        )
      }
    }
  }

  if (!authTested) {
    return <Spinner animation="border" variant="warning"/>
  } else {
    return (
      <>
        <div className="logo">assetary</div>
        <Container className="d-flex justify-content-center mt-5">
          <Card className="text-center" style={{ width: '20rem', borderRadius: 25, backgroundColor: "#e4e4e4" }}>
            <Card.Body>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Email</Form.Label>
                  <Form.Control className="rounded-pill" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                  <Form.Text className="errorMsg text-danger">{emailError}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control className="rounded-pill" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
                  <Form.Text className="errorMsg text-danger">{passwordError}</Form.Text>
                </Form.Group>
                {renderControls()}
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}

export default Login;