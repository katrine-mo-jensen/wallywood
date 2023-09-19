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
          <label>
            Dit navn:*
            <input type="text" {...register("name", { required: true })} />
            {errors.firstname && <span>This field is required</span>}
          </label>
          <label>
            Din email:*
            <input
              type="email"
              
              {...register("email", { required: true })}
            />
            {errors.firstname && <span>This field is required</span>}
          </label>
          <label>
            Din kommentar:*
          <textarea
            name="message"
            
            {...register("message", { required: true })}
            cols="30"
            rows="10"
          />
          </label>

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
