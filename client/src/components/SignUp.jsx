import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignUp = ({}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/users/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, password }),
      }
    );
    if (res.status === 400) {
      const error = await res.json();
      setError(error.error);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="font-bold text-lg p-4">SIGN UP</div>
      <div>{error}</div>
      <div>
        <div className="">
          <input
            type="text"
            placeholder="Enter the name"
            className="outline-none border-2 p-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="my-8">
        <div>
          <input
            type="text"
            placeholder="Enter the username"
            className="outline-none border-2 p-2"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <input
            type="password"
            placeholder="Enter the password"
            className="outline-none border-2 p-2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button
          onClick={signup}
          className=" text-white bg-blue-600 p-2 hover:bg-blue-800 shadow-lg font-bold my-6"
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUp;
