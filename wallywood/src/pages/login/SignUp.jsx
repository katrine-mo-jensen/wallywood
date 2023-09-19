import { useForm } from "react-hook-form";
import style from "../login/LoginPage.module.scss";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // url to post 
    const url = "http://localhost:4000/users"

    // url encoded body object containing our data
    const body = new URLSearchParams()
    body.append('firstname', data.firstname)
    body.append('lastname', data.lastname)
    body.append('email', data.email)
    body.append('password', data.password)
    body.append('org_id', '1')
    body.append('is_active', '1')

    const options = {
        metode: "POST",
        body: body
    }

    fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Fornavn:
        <input {...register("firstname", { required: true })} />
        {errors.firstname && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
        Efternavn:
        <input {...register("lastname", { required: true })} />
        {errors.lastname && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
        Email:
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
        Password:
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Feltet skal udfyldes</span>}
      </label>
      <input className={style.btn} type="submit" value="Submit" />
    </form>
  );
};
