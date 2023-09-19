import { useForm } from "react-hook-form";
import style from "../contact/ContactPage.module.scss";

export function ContactPage() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className={style.contactPage}>
      <div className={style.formContainer}>
        <h2>Kontakt os</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={style.formStyle}>
          <input
            type="text"
            placeholder="Dit navn"
            {...register("name", { required: true })}
          />
          {errors.firstname && <span>This field is required</span>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.firstname && <span>This field is required</span>}

          <textarea
            name="message"
            placeholder="Din besked"
            {...register("message", { required: true })}
            cols="30"
            rows="10"
          />

          <input
            className={style.btn}
            /* onClick={() => {
              setText("");
            }} */
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
}
