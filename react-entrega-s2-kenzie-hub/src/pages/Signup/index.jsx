import Input from "../../components/input";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Container, Content } from "../home/styles";

function Signup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    email: yup.string().email("Email invalid").required("E-mail required"),
    password: yup
      .string()
      .required("Password required")
      .min(8, "8 minimum characters")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte"
      ),
    bio: yup.string().required("Something about you required"),
    contact: yup.string().required("Contact required"),
    course_module: yup.string().required("Module required"),
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
      .post("/users", data)
      .then((Response) => {
        toast.success("success in creating your account");
        return history.push("/login");
      })
      .catch((err) =>
        toast.error("An error occurred in the creation of your account")
      );
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Signup</h1>
          <Input
            label="Name"
            placeholder="Your name"
            register={register}
            name="name"
            error={errors.name?.message}
          />
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
          <Input
            label="Bio"
            placeholder="Tell something about you"
            register={register}
            name="bio"
            error={errors.bio?.message}
          />
          <Input
            label="Contact"
            placeholder="social media/ cellphone or any other type of contact"
            register={register}
            name="contact"
            error={errors.contact?.message}
          />
          <Input
            label="Module"
            placeholder="Your current course module"
            register={register}
            name="course_module"
            error={errors.course_module?.message}
          />
          <button type="submit">Send</button>
          <p>
            alredy have an account? <Link to="/login">Login</Link> here
          </p>
        </form>
      </Content>
    </Container>
  );
}

export default Signup;
