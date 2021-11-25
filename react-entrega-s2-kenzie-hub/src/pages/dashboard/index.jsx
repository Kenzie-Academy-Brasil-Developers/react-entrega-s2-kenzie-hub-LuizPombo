import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../../components/card";
import Input2 from "../../components/input2";

function Dashboard({ authenticated }) {
  const [tech, setTech] = useState([]);
  const [modal, setModal] = useState(true);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzie:token")) || ""
  );
  const userId = JSON.parse(localStorage.getItem("@Kenzie:id"));

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((response) => setTech(response.data.techs));
  }, []);

  const onSubmit = (newTech) => {
    if (!newTech) {
      return toast.error("Right a tech before adding");
    }
    api
      .post(
        "/users/techs",
        { title: newTech.title, status: newTech.status },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => setTech([...tech, response.data]))
      .catch((err) => toast.error("please verify the technology name"));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function add() {
    setModal(false);
  }
  function sendUpdate() {
    setModal(true);
  }

  function remover(id) {
    api.delete(`/users/techs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const finded = tech.find((tec) => {
      return tec.id === id;
    });
    setTech(tech.filter((tec) => tec !== finded));
  }

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <h1>dashboard</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <Input2 register={register} title="title" status="status" />
          <button type="submit">Add</button>
        </section>
      </form>
      <div>
        {tech.map((tech) => (
          <Card
            key={tech.id}
            id={tech.id}
            title={tech.title}
            status={tech.status}
            onClick={() => add()}
            remover={() => remover(tech.id)}
            sendUpdate={() => sendUpdate()}
            register={register}
            modal={modal}
            token={token}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
