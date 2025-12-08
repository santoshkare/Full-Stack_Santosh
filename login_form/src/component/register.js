import { useState } from 'react';

function Register() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  return (
    <>
      <form>
        <input 
          type="text" 
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log("Username:", e.target.value);
          }}
        /><br/><br/>

        <input 
          type="password" 
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log("Password:", e.target.value);
          }}
        /><br/><br/>

        <input 
          type="text" 
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("Email:", e.target.value);
          }}
        /><br/><br/>

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
