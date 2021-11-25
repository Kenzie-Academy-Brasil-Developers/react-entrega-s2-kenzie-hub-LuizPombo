import Input from "../../components/input";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email invalid").required("E-mail required"),
    password: yup
      .string()
      .required("Password required")
      .min(8, "8 minimum characters"),
  });

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        const { id } = response.data.user;

        localStorage.setItem("@Kenzie:token", JSON.stringify(token));

        localStorage.setItem("@Kenzie:id", JSON.stringify(id));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch(
        (err) => console.log(err)
        // toast.error("E-mail or password invalid")
      );
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>

          <Input
            label="Email"
            placeholder="Your best E-mail"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            label="Password"
            placeholder="Your password"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <button type="submit">Send</button>
          <p>
            Don't have an account? <Link to="/signup">signup</Link> here
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
