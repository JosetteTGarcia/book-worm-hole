
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import AllBooks from "./AllBooks";

function App() {

  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false)


  useEffect(() => {
    // auto-login
    fetch("/me", {
      // credentials: 'include'
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) =>
        { setUser(user)
          setAuthChecked(true)
        });
      } else{
        setAuthChecked(true)
      }
    });
  }, []);


if(!authChecked) { return <div></div>}
return (
  <main>
    <NavBar user={user} setUser={setUser} />
  {user ? (
        <Routes>
          <Route path="/" element={
            <Home user={user} />}
          />
          <Route path="/publicbooks" element={
            <AllBooks user={user} setUser={setUser} />}
          />
        </Routes>
      ) : (
          <Routes>
            <Route path="/signup" element={
              <SignUp setUser={setUser} />}
            />
          <Route path="/login" element={
              <Login onLogin={setUser}/>}
            />
            <Route path="/" element={
              <Home user={user}/>}
            />
          </Routes>
      )}
      </main>
)
}
export default App;

