import { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const LoginPage = () => {
  const [isLoginTrue, setIsLoginTrue] = useState(true);

  if (isLoginTrue)
    return (
      <>
        <Login />
        <button onClick={() => setIsLoginTrue(false)}>Ny bruger?</button>
      </>
    );
  else
    return (
      <>
        <SignUp />
        <button onClick={() => setIsLoginTrue(true)}>Allerede bruger?</button>
      </>
    );
};
