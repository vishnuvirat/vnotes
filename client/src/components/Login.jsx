import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../utils/useLocalStorage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useLocalStorage("user", null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const user = await res.json();
    if (res.status === 400) {
      setError(user.error);
    } else {
      setUser(user);
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="font-bold text-lg p-2">LOGIN</div>
      <div>{error}</div>
      <div className="my-6">
        <div>
          <input
            type="text"
            placeholder="Enter the username"
            name=""
            id=""
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
      <div className="flex">
        <div>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className=" text-white bg-blue-600 p-2 hover:bg-blue-800 shadow-lg font-bold my-6 mr-2"
          >
            SignUp
          </button>
        </div>
        <div>
          <button
            onClick={login}
            className=" text-white bg-blue-600 p-2 hover:bg-blue-800 shadow-lg font-bold my-6 ml-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
