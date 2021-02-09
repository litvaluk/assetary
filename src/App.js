import { useState } from 'react'
import Background from './components/Background'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {

  const [user, setUser] = useState("");

  return (
    <>
      <Background/>
      {user ? (
        <Dashboard user={user} setUser={setUser}/>
      ) : (
        <Login user={user} setUser={setUser}/>
      )}
    </>
  );
}

export default App;
