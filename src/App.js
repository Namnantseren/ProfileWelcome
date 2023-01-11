import { useState } from 'react';
import WelcomePage from './Welcome/Welcome';
import Profile from './Profile/Profile'
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(userName, password) {
    data.map((user) => {
      if(userName === user.userName && password === user.password){
        return setIsLoggedIn(true);
      }
    })
    return alert('LOL no')
  }


  let data = [{userName:"ganba", password: "hoho"},{userName:"boldo", password:"hehe"}, {userName:"sandag", password:"123"}]

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {isLoggedIn ? <Profile setlogout={logout}/> : <WelcomePage setLogin={loginHandler}/>}
    </div>
  );
}

export default App;
