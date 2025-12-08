import { useState } from "react";

function Login() {
  return <>
    <form>
      <label>User Name:</label><br/>
      <input type="text" name="username" /><br/>

      <label>Password:</label><br/>
      <input type="password" name="password" /><br/>

      <input type="submit" value="Login" />
    </form>
  </>
}

export default Login;
