import { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import style from "../login/LoginPage.module.scss";

export const LoginPage = () => {
  const [isLoginTrue, setIsLoginTrue] = useState(true);

  if (isLoginTrue)
    return (
      <section>
        <div>
          <h2>Login</h2>
          <Login />
          <button className={style.btn} onClick={() => setIsLoginTrue(false)}>Ny bruger?</button>
        </div>
      </section>
    );
  else
    return (
      <section>
        <div>
          <h2>Opret bruger</h2>
          <SignUp />

          <button className={style.btn} onClick={() => setIsLoginTrue(true)}>Allerede bruger?</button>
        </div>
      </section>
    );
};
