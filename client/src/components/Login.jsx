import React, { useState } from "react";

const Login = () => {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  let name;
  let value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInpval({ ...inpval, [name]: value });
  };

  const UserLogin = async () => {
    const { email, password } = inpval;
    const res = await fetch("/test", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.message === "DBRegSucc") {
      window.alert("login successfull");
    }
  };

  return (
    <>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={inpval.email}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={inpval.password}
        />
      </div>

      <button onClick={UserLogin} type="submit" class="btn btn-primary mt-3">
        Submit
      </button>
    </>
  );
};

export default Login;
